import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Customer } from './entities/customer.entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { HashMiddleware } from 'src/middlewares/hash.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Customer]),
    AuthModule,
    ConfigModule.forRoot({
      expandVariables: true,
    })
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashMiddleware)
      .forRoutes({ path: '/customer', method: RequestMethod.POST });
  }
}
