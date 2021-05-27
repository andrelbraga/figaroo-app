import {
  IsNotEmpty,
  IsString,
  MaxLength
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  description: string;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  startsAt: string | null;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  endsAt: string | null;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  schedulingDate: string | null;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  price: string | null;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  service: string | null;
  
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  status: string | null;
  
  @ApiProperty({ required: false, default: () => Date.now() })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  updatedAt: Date;
}
