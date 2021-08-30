import { ConflictException, Injectable } from '@nestjs/common';

import { AlreadyExisting } from 'src/helpers/exceptions/already-existing.exception';
import { AuthService } from '../auth/auth.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { EmployeRepository } from './employe.repository';
import { Merchant } from '../merchant/entities/merchant.entity';
import { Skill } from '../skill/entities/skill.entity';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Injectable()
export class EmployeService {
  constructor(
    private readonly authService: AuthService,
    private readonly employeRepository: EmployeRepository,
  ) {}

  async createAndRelations(createEmployeDto: CreateEmployeDto) {
    const { document } = createEmployeDto;
    const employe = await this.employeRepository.findOne({ document });
    if (employe) {
      throw new AlreadyExisting();
    }

    if (createEmployeDto.skills) {
      const listSkill: Skill[] = [];
      createEmployeDto.skills.forEach((item: any) => {
        const newSkill = new Skill();
        newSkill.skillId = item;
        listSkill.push(newSkill);
      });
      createEmployeDto.skills = listSkill;
    }

    if (createEmployeDto.merchants) {
      const listMerchants: Merchant[] = [];
      createEmployeDto.merchants.forEach((item: any) => {
        const newMerchants = new Merchant();
        newMerchants.merchantId = item;
        listMerchants.push(newMerchants);
      });
      createEmployeDto.merchants = listMerchants;
    }

    const employeDTO = await this.create(createEmployeDto);

    if (employeDTO) {
      return await this.authService.login(
        employeDTO.document,
        employeDTO.employeId,
      );
    }
    throw new ConflictException();
  }

  async create(createEmployeDto: CreateEmployeDto) {
    createEmployeDto.updatedAt = new Date(Date.now());
    const employe = this.employeRepository.create(createEmployeDto);
    return await this.employeRepository.save(employe);
  }

  async findAllAndRelations() {
    return await this.employeRepository.find({ relations: ['skills'] });
  }

  async findOneAndRelations(id: string) {
    return await this.employeRepository.findOne(
      { employeId: id },
      { relations: ['skills'] },
    );
  }

  async findOneScheduleByScheduleId() {
    /* method */
  }

  async findOneScheduleByEmployeId(employeId) {
    /* method */
  }

  async update(id: string, updateEmployeDto: UpdateEmployeDto) {
    const employe = this.employeRepository.create(updateEmployeDto);
    return await this.employeRepository.update(id, updateEmployeDto);
  }

  async remove(id: string) {
    return await this.employeRepository.delete({ employeId: id });
  }
}
