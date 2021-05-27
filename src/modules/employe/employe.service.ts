import * as bcrypt from 'bcrypt';

import { ConflictException, Injectable } from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { EmployeRepository } from './employe.repository';
import { Skill } from '../common/entities/skill.entity';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Injectable()
export class EmployeService {
  private readonly saltOrRounds = 10;
  constructor(
    private readonly authService: AuthService,
    private readonly employeRepository: EmployeRepository) {}

  async createAndRelations(createEmployeDto: CreateEmployeDto) {
    const hashPassword = await bcrypt.hash(
      createEmployeDto.password,
      this.saltOrRounds,
    );

    const listSkill: Skill[] = []
    createEmployeDto.skills.forEach((item: any) => {
      const newSkill = new Skill()
      newSkill.skillId = item
      listSkill.push(newSkill)
    })
    createEmployeDto.skills = listSkill
    
    const employeDTO = await this.employeRepository.create({
      ...createEmployeDto,
      password: hashPassword,
    });
    
    await this.employeRepository.save(employeDTO);

    if (employeDTO) {
      return await this.authService.login(employeDTO.document, employeDTO.employeId);
    }
    throw new ConflictException();
  }

  async create(createEmployeDto: CreateEmployeDto) {
    const employe = this.employeRepository.create(createEmployeDto) 
    return await this.employeRepository.save(employe);
  }

  async findAllAndRelations() {
    return await this.employeRepository.find({ relations: ['skills'] });
  }

  async findOneAndRelations(id: string) {
    return await this.employeRepository.findOne({ employeId: id }, { relations: ['skills'] });
  }

  async findOneScheduleByScheduleId() {
    /* method */
  }

  async findOneScheduleByEmployeId(employeId) {
    /* method */
  }

  async update(id: string, updateEmployeDto: UpdateEmployeDto) {
    const employe = this.employeRepository.create(updateEmployeDto) 
    return await this.employeRepository.update(id, updateEmployeDto);
  }

  async remove(id: string) {
    return await this.employeRepository.delete({ employeId: id });
  }
}
