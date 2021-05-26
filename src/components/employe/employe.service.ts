import * as bcrypt from 'bcrypt';

import { ConflictException, Injectable } from '@nestjs/common';

import { CreateEmployeDto } from './dto/create-employe.dto';
import { EmployeRepository } from './employe.repository';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Injectable()
export class EmployeService {
  private readonly saltOrRounds = 10;
  constructor(private readonly employeRepository: EmployeRepository) {}

  async createAndRelations(createEmployeDto: CreateEmployeDto) {
    const hashPassword = await bcrypt.hash(
      createEmployeDto.password,
      this.saltOrRounds,
    );
    const employeDTO = { ...createEmployeDto, pasword: hashPassword };
    const ok = await this.employeRepository.save(employeDTO);
    if (ok) {
      return 'Salvo com sucesso';
    }
    throw new ConflictException();
  }

  async create(createEmployeDto: CreateEmployeDto) {
    await this.employeRepository.save(createEmployeDto);
  }

  findAll() {
    return `This action returns all employe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employe`;
  }

  update(id: number, updateEmployeDto: UpdateEmployeDto) {
    return `This action updates a #${id} employe`;
  }

  remove(id: number) {
    return `This action removes a #${id} employe`;
  }
}
