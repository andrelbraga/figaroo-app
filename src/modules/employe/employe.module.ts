import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeController } from './employe.controller';
import { EmployeRepository } from './employe.repository';
import { EmployeService } from './employe.service';
import { HashMiddleware } from 'src/middlewares/hash.middleware';
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
export class EmployeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashMiddleware)
      .forRoutes({ path: '/employe', method: RequestMethod.POST });
  }
}
