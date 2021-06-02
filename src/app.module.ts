import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './modules/customer/customer.module';
import { EmployeModule } from './modules/employe/employe.module';
import { EmployerModule } from './modules/employer/employer.module';
import { MerchantModule } from './modules/merchant/merchant.module';
import { Module } from '@nestjs/common';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { ServiceModule } from './modules/service/service.module';
import { SkillModule } from './modules/skill/skill.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'scripts/config';
import { HistoryModule } from './modules/history/history.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    ServiceModule,
    EmployeModule,
    AuthModule,
    ScheduleModule,
    MerchantModule,
    SkillModule,
    CustomerModule,
    ServiceModule,
    EmployerModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
