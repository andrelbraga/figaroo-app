import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateEmployeDto {
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
  @MaxLength(20)
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  document: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  birthdate: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  surName: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  yearsBusiness: string | null;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  password: string;

  @ApiProperty({ required: false, default: () => Date.now() })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  updatedAt: Date;
}
