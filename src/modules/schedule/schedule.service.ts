import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Injectable } from '@nestjs/common';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  create(createScheduleDto: CreateScheduleDto) {
    return 'This action adds a new schedule';
  }

  findAll() {
    return `This action returns all schedule`;
  }

  findOne(id: string) {
    return `This action returns a #${id} schedule`;
  }

  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: string) {
    return `This action removes a #${id} schedule`;
  }
}
