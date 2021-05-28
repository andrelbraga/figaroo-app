import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeController } from './employe.controller';
import { EmployeRepository } from './employe.repository';
import { EmployeService } from './employe.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeRepository]), 
    AuthModule, 
    ConfigModule.forRoot({
      expandVariables: true,
    })
  ],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
