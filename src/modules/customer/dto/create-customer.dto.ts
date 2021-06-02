import { IsNotEmpty, IsString, MaxLength } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  password: string;
}
