import { Column, Entity, Index, OneToMany } from 'typeorm';
/* import { EmployeHasCompetencie } from './employe-has-competencie.entity';
import { EmployeHasPhone } from './employe-has-phone.entity';
import { MerchantHasEmploye } from './merchant-has-employe.entity';
 */
@Index('employe_pkey', ['employeId'], { unique: true })
@Entity('employe', { schema: 'public' })
export class Employe {
  @Column({
    type: 'uuid',
    primary: true,
    name: 'employe_id',
    default: () => 'uuid_generate_v4()',
  })
  employeId: string;

  @Column({ type: 'text', name: 'name' })
  name: string;

  @Column({ type: 'text', name: 'last_name' })
  lastName: string;

  @Column({ type: 'text', name: 'email' })
  email: string;

  @Column({ type: 'text', name: 'document' })
  document: string;

  @Column({ type: 'date', name: 'birthdate' })
  birthdate: string;

  @Column({ type: 'text', name: 'sur_name', nullable: true })
  surName: string | null;

  @Column({ type: 'text', name: 'years_business', nullable: true })
  yearsBusiness: string | null;

  @Column({ type: 'text', name: 'password' })
  password: string;

  @Column({
    type: 'timestamp without time zone',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp without time zone',
    name: 'updated_at',
  })
  updatedAt: Date;

  @Column({ type: 'text', name: 'age', nullable: true })
  age: string | null;

  /* @OneToMany(
    () => EmployeHasCompetencie,
    (employeHasCompetencie) => employeHasCompetencie.employe,
  )
  employeHasCompetencies: EmployeHasCompetencie[];

  @OneToMany(
    () => EmployeHasPhone,
    (employeHasPhone) => employeHasPhone.employe,
  )
  employeHasPhones: EmployeHasPhone[];

  @OneToMany(
    () => MerchantHasEmploye,
    (merchantHasEmploye) => merchantHasEmploye.employe,
  )
  merchantHasemploye: MerchantHasEmploye[]; */
}
