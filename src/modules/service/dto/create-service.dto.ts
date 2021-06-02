import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Employe } from 'src/modules/employe/entities/employe.entity';
import { Merchant } from 'src/modules/merchant/entities/merchant.entity';

export class CreateServiceDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  description: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  price: string;

  @ApiProperty({ required: false, default: () => Date.now() })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  updatedAt: Date;

  @ApiProperty({ required: false })
  merchants: Merchant[];

  @ApiProperty({ required: false })
  employes: Employe[];
}
