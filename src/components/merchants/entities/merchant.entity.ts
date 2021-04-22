import { Column, Entity, Index, OneToMany } from 'typeorm';
/* import { EmployerHasMerchant } from './EmployerHasMerchant';
import { MerchantHasAddress } from './MerchantHasAddress';
import { MerchantHasCustomer } from './MerchantHasCustomer';
import { MerchantHasEmploye } from './MerchantHasEmploye';
import { MerchantHasPhone } from './MerchantHasPhone';
 */
@Index('merchant_pkey', ['merchantId'], { unique: true })
@Entity('merchants', { schema: 'public' })
export class Merchants {
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
    name: 'employers',
    nullable: true,
    precision: 3,
    scale: 0,
  })
  employers: string | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;

  @Column('timestamp with time zone', { name: 'updated_at' })
  updatedAt: Date;

  @Column('numeric', { name: 'document', precision: 20, scale: 0 })
  document: string;

  @Column('numeric', {
    name: 'billing',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  billing: string | null;

  /*   @OneToMany(
    () => EmployerHasMerchant,
    (employerHasMerchant) => employerHasMerchant.merchant,
  )
  employerHasMerchants: EmployerHasMerchant[];

  @OneToMany(
    () => MerchantHasAddress,
    (merchantHasAddress) => merchantHasAddress.merchant,
  )
  merchantHasAddresses: MerchantHasAddress[];

  @OneToMany(
    () => MerchantHasCustomer,
    (merchantHasCustomer) => merchantHasCustomer.merchant,
  )
  merchantHasCustomers: MerchantHasCustomer[];

  @OneToMany(
    () => MerchantHasEmploye,
    (merchantHasEmploye) => merchantHasEmploye.merchant,
  )
  merchantHasemploye: MerchantHasEmploye[];

  @OneToMany(
    () => MerchantHasPhone,
    (merchantHasPhone) => merchantHasPhone.merchant,
  )
  merchantHasPhones: MerchantHasPhone[]; */
}
