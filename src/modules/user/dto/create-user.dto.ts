import { IsNotEmpty, IsString, MaxLength } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

export class CreateUserDto {
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  phone: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  document: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Exclude()
  status: string;
  
  @Exclude()
  updatedAt: Date;
}
