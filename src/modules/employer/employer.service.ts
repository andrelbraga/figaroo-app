import { CreateEmployerDto } from './dto/create-employer.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Employer } from './entities/employer.entity';
import { AlreadyExisting } from 'src/helpers/exceptions/already-existing.exception';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private employerRepository: Repository<Employer>,
  ) {}
  async createAndRelations(createEmployerDto: CreateEmployerDto) {
    const { document } = createEmployerDto;
    const employer = await this.employerRepository.findOne({ document });
    if (employer) {
      throw new AlreadyExisting();
    }

    return await this.create({
      ...createEmployerDto,
    });
  }

  async create(createEmployerDto: CreateEmployerDto) {
    const employer = this.employerRepository.create(createEmployerDto);
    return await this.employerRepository.save(employer);
  }

  findAll() {
    return `This action returns all employer`;
  }

  findOne(id: string) {
    return `This action returns a #${id} employer`;
  }

  update(id: string, updateEmployerDto: UpdateEmployerDto) {
    return `This action updates a #${id} employer`;
  }

  remove(id: string) {
    return `This action removes a #${id} employer`;
  }
}
