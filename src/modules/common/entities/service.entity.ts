import { Column, Entity, Index, ManyToMany } from "typeorm";

import { Merchant } from "src/modules/merchant/entities/merchant.entity";

@Index("service_pkey", ["serviceId"], { unique: true })
@Entity("service", { schema: "public" })
export class Service {
  @Column("uuid", {
    primary: true,
    name: "service_id",
    default: () => "uuid_generate_v4()",
  })
  serviceId: string;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("numeric", { name: "price", precision: 10, scale: 0 })
  price: string | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP(0)",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at" })
  updatedAt: Date;

  @ManyToMany(() => Merchant, (merchant: Merchant) => merchant.services)
  merchants: Merchant[];
}
