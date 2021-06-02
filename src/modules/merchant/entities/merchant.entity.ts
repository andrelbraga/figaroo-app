import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Address } from 'src/modules/common/entities/address.entity';
import { Employe } from 'src/modules/employe/entities/employe.entity';
import { Employer } from 'src/modules/employer/entities/employer.entity';
import { Service } from 'src/modules/service/entities/service.entity';

@Index('merchant_pkey', ['merchantId'], { unique: true })
@Entity('merchant', { schema: 'public' })
export class Merchant {
  @Column('uuid', {
    primary: true,
    name: 'merchant_id',
    default: () => 'uuid_generate_v4()',
  })
  merchantId: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('numeric', {
    name: 'employees',
    nullable: true,
    precision: 3,
    scale: 0,
  })
  employees: string | null;

  @Column('numeric', { name: 'document', precision: 20, scale: 0, nullable: true, })
  document: string | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;

  @Column('timestamp with time zone', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Employer, (employer) => employer.merchants)
  @JoinColumn({ name: 'employer_id' })
  employer: Employer;

  @OneToMany(() => Address, (address) => address.merchants)
  address: Address;

  @ManyToMany(() => Employe, (employe: Employe) => employe.merchants)
  employes: Employe[];

  @ManyToMany(() => Service)
  @JoinTable({
    name: 'merchant_has_services',
    joinColumn: {
      name: 'merchant_id',
      referencedColumnName: 'merchantId',
    },
    inverseJoinColumn: {
      name: 'service_id',
      referencedColumnName: 'serviceId',
    },
  })
  services: Service[];
}
