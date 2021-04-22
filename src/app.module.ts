import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'scripts/config';
import { CustomersModule } from './components/customers/customers.module';
/* import { MerchantsModule } from './components/merchants/merchants.module';
import { employeModule } from './components/employe/employe.module';
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CustomersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
