import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { CustomerModule } from './modules/customer/customer.module';
import { EmployeModule } from './modules/employe/employe.module';
import { EmployerModule } from './modules/employer/employer.module';
import { HistoryModule } from './modules/history/history.module';
import { MerchantModule } from './modules/merchant/merchant.module';
import { Module } from '@nestjs/common';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { SecurityModule } from './modules/security/security.module';
import { ServiceModule } from './modules/service/service.module';
import { SkillModule } from './modules/skill/skill.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { configService } from 'scripts/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    ServiceModule,
    EmployeModule,
    ScheduleModule,
    MerchantModule,
    SkillModule,
    CustomerModule,
    ServiceModule,
    EmployerModule,
    HistoryModule,
    UserModule,
    SecurityModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
