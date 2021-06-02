import { Column, Entity, Index } from "typeorm";

@Index('history_pkey', ['historyId'], { unique: true })
@Entity('history', { schema: 'public' })
export class History {
  @Column('uuid', {
    primary: true,
    name: 'history_id',
    default: () => 'uuid_generate_v4()',
  })
  historyId: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;
}
