import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { Employe } from "./employe.entity";
import { Skill } from "../../shared/entities/skill.entity";

@Entity("employe_has_skill", { schema: "public" })
export class EmployeHasSkill {
  @Column({
    type: 'uuid',
    primary: true,
    name: 'employe_has_skill_id',
    default: () => 'uuid_generate_v4()',
  })
  employeHasSkillId: string;
  
  @ManyToOne(
    () => Skill,
    (skills) => skills
  )
  @JoinColumn([
    { name: "skill_id", referencedColumnName: "skillId" },
  ])
  skill: Skill;

  @ManyToOne(() => Employe, (employe) => employe.employeHasSkills)
  @JoinColumn([{ name: "employe_id", referencedColumnName: "employeId" }])
  employe: Employe;
}
