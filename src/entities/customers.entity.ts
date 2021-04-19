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
  @Column({ name: 'name', type: 'text', nullable: false })
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @Column({ name: 'last_name', type: 'text', nullable: false })
  lastName: string;

  @ApiProperty({ required: true })
  @IsString()
  @Column({ name: 'email', type: 'text', nullable: false })
  email: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @Column({ name: 'document', type: 'numeric', nullable: false })
  document: string;

  @ApiProperty({ required: false })
  @IsString()
  @Column({ name: 'sur_name', type: 'text', nullable: true })
  surName: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @Column({ name: 'age', type: 'numeric', nullable: true })
  age: string;

  @ApiProperty({ required: false })
  @IsString()
  @Column({ name: 'nationality', type: 'text', nullable: true })
  nationality: string;

  @ApiProperty({ required: false })
  @IsString()
  @Column({ name: 'avatar_path', type: 'text', nullable: true })
  avatarPath: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @Column({ name: 'phone', type: 'numeric', nullable: false })
  phone: number;

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  @Column({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createdAt: string;

  @ApiProperty({ required: true })
  @IsDateString()
  @IsOptional()
  @Column({
    name: 'updated_at',
    type: 'timestamp without time zone',
    nullable: false,
  })
  updatedAt: string;
}
