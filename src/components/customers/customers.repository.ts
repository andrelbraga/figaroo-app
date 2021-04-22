import { Repository, EntityRepository } from 'typeorm';
import { Customers } from './entities/customer.entity';

@EntityRepository(Customers)
export class CustomersRepository extends Repository<Customers> {}
