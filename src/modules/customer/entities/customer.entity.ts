import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

import { Exclude } from 'class-transformer';
import { Merchant } from 'src/modules/merchant/entities/merchant.entity';
import { Schedule } from 'src/modules/schedule/entities/schedule.entity';

@Entity('customer', { schema: 'public' })
export class Customer {
  @Column('uuid', {
    primary: true,
    name: 'customer_id',
    default: () => 'uuid_generate_v4()',
  })
  customerId: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'last_name' })
  lastName: string;

  @Column('text', { name: 'email' })
  email: string;

  @Exclude()
  @Column({ type: 'text', name: 'password' })
  password: string;

  @Column('text', { name: 'phone' })
  phone: string;
  
  @Column('text', { name: 'document', nullable: true })
  document: string | null;

  @Column('text', { name: 'sur_name', nullable: true })
  surName: string | null;

  @Column('text', { name: 'nationality', nullable: true })
  nationality: string | null;

  @Column('text', { name: 'avatar_path', nullable: true })
  avatarPath: string | null;

  @Column('numeric', { name: 'age', nullable: true })
  age: string | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Merchant)
  @JoinTable({ name: 'customer_has_merchants' })
  merchants: Merchant[];
  
  @OneToMany(() => Schedule, schedule => schedule.employe)
  schedule: Schedule[];
}
