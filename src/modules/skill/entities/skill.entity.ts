import { Column, Entity, Index, ManyToMany } from 'typeorm';

import { Employe } from 'src/modules/employe/entities/employe.entity';

@Index('skill_pkey', ['skillId'], { unique: true })
@Entity('skill', { schema: 'public' })
export class Skill {
  @Column({
    type: 'uuid',
    primary: true,
    default: () => 'uuid_generate_v4()',
    name: 'skill_id',
  })
  skillId: string;

  @Column({ type: 'text', name: 'name', nullable: true })
  name: string | null;

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
  
  @ManyToMany(() => Employe, (employe: Employe) => employe.skills)
  employes: Employe[];
}
