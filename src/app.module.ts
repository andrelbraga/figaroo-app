import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { EmployeModule } from './modules/employe/employe.module';
import { MerchantModule } from './modules/merchant/merchant.module';
import { Module } from '@nestjs/common';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { SkillModule } from './modules/skill/skill.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'scripts/config';
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
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
