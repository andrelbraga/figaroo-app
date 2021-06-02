import { Module } from '@nestjs/common';
import { Service } from './entities/service.entity';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Service])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}
