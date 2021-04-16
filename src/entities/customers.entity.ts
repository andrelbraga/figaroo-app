import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';

@Entity()
export class Customers {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  customer_id: string;

  @ApiProperty({ required: true })
  @IsString()
  @Column({ type: 'text', nullable: true })
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @Column({ type: 'text', nullable: true })
  last_name: string;

  @ApiProperty({ required: true })
  @IsString()
  @Column({ type: 'text', nullable: true })
  email: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @Column({ type: 'numeric', nullable: true })
  document: number;

  @ApiProperty({ required: false })
  @IsString()
  @Column({ type: 'text', nullable: true })
  sur_name: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @Column({ type: 'numeric', nullable: true })
  age: number;

  @ApiProperty({ required: false })
  @IsString()
  @Column({ type: 'text', nullable: true })
  nationality: number;

  @ApiProperty({ required: false })
  @IsString()
  @Column({ type: 'text', nullable: true })
  avatar_path: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @Column({ type: 'numeric' })
  phone: number;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  @Column({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: string;

  @ApiProperty({ required: true })
  @IsDateString()
  @IsOptional()
  @Column({
    type: 'timestamp without time zone',
  })
  updated_at: string;
}
