import { Column, Entity, Index, OneToMany } from 'typeorm';

import { Exclude } from 'class-transformer';
import { Merchant } from 'src/modules/merchant/entities/merchant.entity';

@Index('employer_pkey', ['employerId'], { unique: true })
@Entity('employer', { schema: 'public' })
export class Employer {
  @Column('uuid', {
    primary: true,
    name: 'employer_id',
    default: () => 'uuid_generate_v4()',
  })
  employerId: string;

  @Column('text', { name: 'document' })
  document: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('date', { name: 'birthdate' })
  birthdate: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'last_name', nullable: true })
  lastName: string | null;

  @Exclude()
  @Column('text', { name: 'password' })
  password: string;

  @Column('text', { name: 'avatar_path', nullable: true })
  avatarPath: string | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Merchant, (merchant) => merchant.employer)
  merchants: Merchant[];
}
