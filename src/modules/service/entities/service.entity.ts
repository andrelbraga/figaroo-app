import { Column, Entity, Index, ManyToMany, OneToMany } from 'typeorm';

import { Employe } from 'src/modules/employe/entities/employe.entity';
import { Merchant } from 'src/modules/merchant/entities/merchant.entity';
import { Schedule } from 'src/modules/schedule/entities/schedule.entity';

@Index('service_pkey', ['serviceId'], { unique: true })
@Entity('service', { schema: 'public' })
export class Service {
  @Column('uuid', {
    primary: true,
    name: 'service_id',
    default: () => 'uuid_generate_v4()',
  })
  serviceId: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'description' })
  description: string;

  @Column('numeric', { name: 'price', precision: 10, scale: 0 })
  price: string | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => Merchant, (merchant: Merchant) => merchant.services)
  merchants: Merchant[];

  @ManyToMany(() => Employe, (employe: Employe) => employe.services)
  employes: Employe[];

  @OneToMany(() => Schedule, (schedule) => schedule.service)
  schedule: Schedule[];
}
