import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  document: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  password: string;
}
