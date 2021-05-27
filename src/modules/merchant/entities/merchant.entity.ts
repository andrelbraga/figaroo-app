import { Column, Entity, Index, JoinTable, ManyToMany } from "typeorm";

import { Employe } from "src/modules/employe/entities/employe.entity";
import { Service } from "src/modules/common/entities/service.entity";

@Index("merchant_pkey", ["merchantId"], { unique: true })
@Entity("merchant", { schema: "public" })
export class Merchant {
  @Column("uuid", {
  primary: true,
  name: "merchant_id",
  default: () => "uuid_generate_v4()",
  })
  merchantId: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("numeric", {
    name: "employees",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  employees: string | null;

  @Column("numeric", { name: "document", precision: 20, scale: 0 })
  document: string;
  
  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP(0)",
  })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updated_at" })
  updatedAt: Date;

  @ManyToMany(() => Employe, (employe: Employe) => employe.merchants)
  employes: Employe[];

  @ManyToMany(() => Service)
  @JoinTable({ name: 'merchant_has_services' })
  services: Service[];
}
