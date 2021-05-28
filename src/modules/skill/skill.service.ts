import { CreateSkillDto } from './dto/create-skill.dto';
import { Injectable } from '@nestjs/common';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) {}
  create(createSkillDto: CreateSkillDto) {
    return 'This action adds a new skill';
  }

  async findAll() {
    return await this.skillRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} skill`;
  }

  update(id: string, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: string) {
    return `This action removes a #${id} skill`;
  }
}
