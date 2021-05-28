import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillService } from './skill.service';
import { UpdateSkillDto } from './dto/update-skill.dto';

@ApiTags('Habilidades')
@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

 /*  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  } */

  @Get()
  findAll() {
    return this.skillService.findAll();
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillService.update(id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillService.remove(id);
  } */
}
