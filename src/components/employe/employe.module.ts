import { EmployeController } from './employe.controller';
import { EmployeRepository } from './employe.repository';
import { EmployeService } from './employe.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeRepository])],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
