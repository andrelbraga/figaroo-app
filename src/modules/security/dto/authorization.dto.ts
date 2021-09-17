import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class AuthorizationDto {
  @ApiProperty()
  @IsString()
  @MaxLength(35)
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @MaxLength(20)
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  password: string;
}
