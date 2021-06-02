import { CreateMerchantDto } from './dto/create-merchant.dto';
import { Injectable } from '@nestjs/common';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { Address } from '../common/entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Merchant } from './entities/merchant.entity';
import { Repository } from 'typeorm';
import { AlreadyExisting } from 'src/helpers/exceptions/already-existing.exception';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Address) private addressRepository: Repository<Address>,
    @InjectRepository(Merchant) private merchantRepository: Repository<Merchant>
  ) {}
  async createAndRelations(createMerchantDto: CreateMerchantDto) {
    const { document } = createMerchantDto
    let merchant = await this.merchantRepository.findOne({ document })
    if(merchant){
      throw new AlreadyExisting();
    }
    merchant = null
    const address = this.addressRepository.create(createMerchantDto.address)
    const responseAddress = await this.addressRepository.save(address)

    merchant = await this.merchantRepository.create({
      ...createMerchantDto,
      address: responseAddress
    })
    return await this.merchantRepository.save(merchant)

  }

  async create(createMerchantDto: CreateMerchantDto) {
    const merchant = this.merchantRepository.create(createMerchantDto)
    return await this.merchantRepository.save(merchant)
  }

  findAll() {
    return `This action returns all merchant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchant`;
  }

  update(id: number, updateMerchantDto: UpdateMerchantDto) {
    return `This action updates a #${id} merchant`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchant`;
  }
}
