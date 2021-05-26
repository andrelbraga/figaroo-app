import { EntityRepository, Repository } from 'typeorm';

import { Employe } from './entities/employe.entity';

@EntityRepository(Employe)
export class EmployeRepository extends Repository<Employe> { }
