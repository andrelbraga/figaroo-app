import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Merchant } from 'src/modules/merchant/entities/merchant.entity';
import { User } from 'src/modules/user/entities/user.entity';

export class CreateCustomerDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  lastName: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  document: string;

  /*   @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  surName: string; */

  /*   @ApiProperty({ required: false })
  @IsString()
  @MaxLength(20)
  nationality: string;
 */

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  phone: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  user: User;

  @ApiProperty({ required: false })
  merchants: Merchant[];
}
