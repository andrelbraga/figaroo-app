import { CreateCustomerDto } from './dto/create-customer.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlreadyExisting } from 'src/helpers/exceptions/already-existing.exception';
import { AuthService } from '../auth/auth.service';
import { Merchant } from '../merchant/entities/merchant.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private readonly authService: AuthService,
  ) {}

  async createAndRelations(createCustomerDto: CreateCustomerDto) {
    const { document } = createCustomerDto;
    const customer = await this.customerRepository.findOne({ document });
    if (customer) {
      throw new AlreadyExisting();
    }

    if (createCustomerDto.merchants) {
      const listMerchants: Merchant[] = [];
      createCustomerDto.merchants.forEach((item: any) => {
        const newMerchants = new Merchant();
        newMerchants.merchantId = item;
        listMerchants.push(newMerchants);
      });
      createCustomerDto.merchants = listMerchants;
    }

    const customerDTO = await this.create(createCustomerDto);

    if (customerDTO) {
      return await this.authService.login(
        customerDTO.document,
        customerDTO.customerId,
      );
    }
    throw new ConflictException();
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
