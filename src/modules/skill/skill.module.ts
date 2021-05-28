import { Module } from '@nestjs/common';
import { Skill } from './entities/skill.entity';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  controllers: [SkillController],
  providers: [SkillService]
})
export class SkillModule {}
