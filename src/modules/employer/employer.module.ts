import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { Address } from '../common/entities/address.entity';
import { ConfigModule } from '@nestjs/config';
import { Employer } from './entities/employer.entity';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';
import { HashMiddleware } from 'src/middlewares/hash.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employer, Address]),
  ConfigModule.forRoot({
    expandVariables: true,
  })],
  controllers: [EmployerController],
  providers: [EmployerService],
})
export class EmployerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashMiddleware)
      .forRoutes({ path: '/employer', method: RequestMethod.POST });
  }
}
