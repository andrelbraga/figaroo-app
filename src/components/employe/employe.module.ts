import { Module } from '@nestjs/common';
import { employeervice } from './employe.service';
import { employeController } from './employe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employeRepository } from './employe.repository';

@Module({
  imports: [TypeOrmModule.forFeature([employeRepository])],
  controllers: [employeController],
  providers: [employeervice],
})
export class employeModule {}
