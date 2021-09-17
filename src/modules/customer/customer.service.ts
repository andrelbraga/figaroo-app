import { CreateCustomerDto } from './dto/create-customer.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlreadyExisting } from 'src/helpers/exceptions/already-existing.exception';
import { Merchant } from '../merchant/entities/merchant.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { UserTypeEnum } from '../user/enums/user.enum';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private readonly userService: UserService,
  ) {}

  async createAndRelations(createCustomerDto: CreateCustomerDto) {
    const { document, phone, password, email } = createCustomerDto;
    let customer = await this.customerRepository.findOne({
      where: [{ phone }, { email }],
    });

    if (customer) {
      throw new AlreadyExisting();
    }

    if (createCustomerDto.merchants) {
      const listMerchants: Merchant[] = [];
      createCustomerDto.merchants.forEach((id: any) => {
        const newMerchants = new Merchant();
        newMerchants.merchantId = id;
        listMerchants.push(newMerchants);
      });
      createCustomerDto.merchants = listMerchants;
    }

    createCustomerDto.user = await this.createUser(createCustomerDto);

    return await this.create(createCustomerDto);
  }

  async createUser(createCustomerDto: CreateCustomerDto) {
    const { phone, password, email, document } = createCustomerDto;
    const userDTO: User = await this.userService.create({
      phone,
      password,
      email,
      document,
      type: UserTypeEnum.CUSTOMER,
    } as User);
    return userDTO;
  }

  async create(createCustomerDto: CreateCustomerDto) {
    createCustomerDto.updatedAt = new Date(Date.now());
    const createCustomer = this.customerRepository.create(createCustomerDto);
    return await this.customerRepository.save(createCustomer);
  }

  findAll() {
    return `This action returns all customer`;
  }

  async findOne(document: string) {
    return await this.customerRepository.findOne({ document });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
