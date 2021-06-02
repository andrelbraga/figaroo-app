import { Address } from '../common/entities/address.entity';
import { ConfigModule } from '@nestjs/config';
import { Merchant } from './entities/merchant.entity';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Merchant, Address]),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
  ],
  controllers: [MerchantController],
  providers: [MerchantService]
})
export class MerchantModule {}
