import { Column, Entity, Index, ManyToMany } from "typeorm";

import { Employe } from "src/modules/employe/entities/employe.entity";

@Index("schedules_pkey1", ["scheduleId"], { unique: true })
@Entity("schedule", { schema: "public" })
export class Schedule {
  @Column("uuid", {
    primary: true,
    name: "schedule_id",
    default: () => "uuid_generate_v4()",
  })
  scheduleId: string;

  @Column("text", { name: "description" })
  description: string;
  
  @Column("time without time zone", { name: "starts_at", nullable: true })
  startsAt: string | null;
  
  @Column("time without time zone", { name: "ends_at", nullable: true })
  endsAt: string | null;
  
  @Column("date", { name: "scheduling_date", nullable: true })
  schedulingDate: string | null;
  
  @Column("text", { name: "price", nullable: true })
  price: string | null;
  
  @Column("text", { name: "service", nullable: true })
  service: string | null;
  
  @Column("text", { name: "status", nullable: true })
  status: string | null;
  
  @Column({ type: "timestamp without time zone", name: "updated_at" })
  updatedAt: Date;
  
  @Column("timestamp without time zone", {
      name: "created_at",
      default: () => "CURRENT_TIMESTAMP(0)",
    })
  createdAt: Date;

  @ManyToMany(() => Employe, (employe: Employe) => employe.skills)
  employes: Employe[];
}
