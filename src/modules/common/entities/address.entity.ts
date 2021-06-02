import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { Merchant } from 'src/modules/merchant/entities/merchant.entity';

@Index('address_pkey', ['addressId'], { unique: true })
@Entity('address', { schema: 'public' })
export class Address {
  @Column('uuid', {
    primary: true,
    name: 'address_id',
    default: () => 'uuid_generate_v4()',
  })
  addressId: string;

  @Column('text', { name: 'street' })
  street: string;

  @Column('numeric', { name: 'number', precision: 5, scale: 0 })
  number: string;

  @Column('text', { name: 'state' })
  state: string;

  @Column('text', { name: 'country', nullable: true })
  country: string | null;

  @Column('text', { name: 'city' })
  city: string;

  @Column('numeric', { name: 'zip', precision: 9, scale: 0 })
  zip: string;

  @Column('text', { name: 'complement', nullable: true })
  complement: string | null;

  @Column('text', { name: 'district' })
  district: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Merchant, (merchant) => merchant.address)
  @JoinColumn({ name: 'merchant_id' })
  merchants: Merchant[];
}
