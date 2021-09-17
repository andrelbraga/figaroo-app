import { Injectable } from '@nestjs/common';

import { AlreadyExisting } from 'src/helpers/exceptions/already-existing.exception';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { Merchant } from '../merchant/entities/merchant.entity';
import { Skill } from '../skill/entities/skill.entity';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { Employe } from './entities/employe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTypeEnum } from '../user/enums/user.enum';

@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private employeRepository: Repository<Employe>,
    private readonly userService: UserService,
  ) {}

  async createAndRelations(createEmployeDto: CreateEmployeDto) {
    const { document, phone, password, email } = createEmployeDto;

    const employe = await this.employeRepository.findOne({
      where: [{ phone }, { email }],
    });
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

    createEmployeDto.user = await this.createUser(createEmployeDto);

    return await this.create(createEmployeDto);
  }

  async createUser(createEmployeDto: CreateEmployeDto) {
    const { phone, password, email, document } = createEmployeDto;
    const userDTO: User = await this.userService.create({
      phone,
      password,
      email,
      document,
      type: UserTypeEnum.EMPLOYE,
    } as User);
    return userDTO;
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
