import { AuthModule } from '../auth/auth.module';
import { EmployeController } from './employe.controller';
import { EmployeRepository } from './employe.repository';
import { EmployeService } from './employe.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeRepository]), AuthModule],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
