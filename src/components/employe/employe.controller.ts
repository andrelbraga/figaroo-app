import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { employeervice } from './employe.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';

@Controller('employe')
export class employeController {
  constructor(private readonly employeervice: employeervice) {}

  @Post()
  create(@Body() createEmployeDto: CreateEmployeDto) {
    return this.employeervice.create(createEmployeDto);
  }

  @Get()
  findAll() {
    return this.employeervice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeervice.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employeervice.update(+id, updateEmployeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeervice.remove(+id);
  }
}
