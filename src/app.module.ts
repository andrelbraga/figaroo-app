import { AppController } from './app.controller';
import { EmployeModule } from './components/employe/employe.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'scripts/config';
/* import { MerchantsModule } from './components/merchants/merchants.module';
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    EmployeModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
