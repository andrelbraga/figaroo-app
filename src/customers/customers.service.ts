import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from '../entities/customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers) private readonly repo: Repository<Customers>,
  ) {}

  public async getAll() {
    return await this.repo.findAndCount();
  }
}
