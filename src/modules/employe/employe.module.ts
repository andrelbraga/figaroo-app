import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { Employe } from './entities/employe.entity';
import { EmployeController } from './employe.controller';
import { EmployeService } from './employe.service';
import { HashMiddleware } from 'src/middlewares/hash.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employe]),
    UserModule,
    ConfigModule.forRoot({
      expandVariables: true,
    }),
  ],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashMiddleware)
      .forRoutes({ path: '/employe', method: RequestMethod.POST });
  }
}
