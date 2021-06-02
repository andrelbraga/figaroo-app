import { Merchant } from './entities/merchant.entity';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Merchant])],
  controllers: [MerchantController],
  providers: [MerchantService]
})
export class MerchantModule {}
