import { IsNotEmpty, IsString, MaxLength } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";
import { Merchant } from "src/modules/merchant/entities/merchant.entity";

export class CreateEmployerDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  name: string;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  lastName: string | null;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  birthdate: string;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  document: string;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  password: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  avatarPath: string | null;
  
  @ApiProperty({ required: false, default: () => Date.now() })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  updatedAt: Date;
  
  @ApiProperty({ required: true })
  merchants: Merchant[];
}
