import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { EmployeModule } from './modules/employe/employe.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'scripts/config';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { MerchantModule } from './modules/merchant/merchant.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    EmployeModule,
    AuthModule,
    ScheduleModule,
    MerchantModule,
  ],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
