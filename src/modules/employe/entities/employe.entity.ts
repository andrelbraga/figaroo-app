import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { Exclude } from 'class-transformer';
import { Merchant } from 'src/modules/merchant/entities/merchant.entity';
import { Schedule } from 'src/modules/schedule/entities/schedule.entity';
import { Service } from 'src/modules/service/entities/service.entity';
import { Skill } from 'src/modules/skill/entities/skill.entity';

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

  @Column({ type: 'text', name: 'nationality', nullable: true })
  nationality: string;

  @Column({ type: 'date', name: 'birthdate' })
  birthdate: string;
  
  @Column({ type: 'text', name: 'phone' })
  phone: string;

  @Column({ type: 'text', name: 'sur_name' })
  surName: string | null;

  @Column({ type: 'text', name: 'years_business' })
  yearsBusiness: string | null;

  @Exclude()
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
  
  @OneToMany(() => Schedule, schedule => schedule.employe)
  schedule: Schedule[];
  
  @ManyToMany(() => Skill)
  @JoinTable({ name: 'employe_has_skills' })
  skills: Skill[];

  @ManyToMany(() => Service)
  @JoinTable({ name: 'employe_has_services' })
  services: Service[];

  @ManyToMany(() => Merchant)
  @JoinTable({ name: 'employe_has_merchants' })
  merchants: Merchant[];

  
  /*
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
