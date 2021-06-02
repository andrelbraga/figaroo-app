import { CreateEmployerDto } from './dto/create-employer.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Employer } from './entities/employer.entity';
import { AlreadyExisting } from 'src/helpers/exceptions/already-existing.exception';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private employerRepository: Repository<Employer>,
    private readonly authService: AuthService,
  ) {}
  async createAndRelations(createEmployerDto: CreateEmployerDto) {
    const { document } = createEmployerDto;
    const employer = await this.employerRepository.findOne({ document });
    if (employer) {
      throw new AlreadyExisting();
    }

    const employerDTO = await this.create({
      ...createEmployerDto,
    });

    if (employerDTO) {
      return await this.authService.login(
        employerDTO.document,
        employerDTO.employerId,
      );
    }
    throw new ConflictException();
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
