import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeService } from './employe.service';
import { CreateEmployeDto } from './dto/create-employe.dto';
import { UpdateEmployeDto } from './dto/update-employe.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('employe')
@Controller('employe')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post()
  create(@Body() createEmployeDto: CreateEmployeDto) {
    return this.employeService.createAndRelations(createEmployeDto);
  }

  @Get()
  findAll() {
    return this.employeService.findAllAndRelations();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeService.findOneAndRelations(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeDto: UpdateEmployeDto) {
    return this.employeService.update(id, updateEmployeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeService.remove(id);
  }
}
