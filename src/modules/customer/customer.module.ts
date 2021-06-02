import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { HashMiddleware } from 'src/middlewares/hash.middleware';

@Module({
  imports:[
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
