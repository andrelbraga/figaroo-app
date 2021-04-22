import { CreateEmployeDto } from './dto/create-employe.dto';
import { Repository, EntityRepository } from 'typeorm';
import { Employe } from './entities/employe.entity';

@EntityRepository(Employe)
export class EmployeRepository extends Repository<Employe> {
  public async createEmploye(
    createemployeDTO: CreateEmployeDto,
  ): Promise<Employe> {
    const employe = new Employe();
    console.log(createemployeDTO);
    return employe;
  }
}
