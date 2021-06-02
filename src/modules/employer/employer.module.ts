import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { Address } from '../common/entities/address.entity';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Employer } from './entities/employer.entity';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';
import { HashMiddleware } from 'src/middlewares/hash.middleware';
import { Merchant } from '../merchant/entities/merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employer, Address, Merchant]),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    AuthModule,
  ],
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
