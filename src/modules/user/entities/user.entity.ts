import * as bcrypt from 'bcrypt';

import { BeforeInsert, Column, Entity, Index } from 'typeorm';

@Index('user_pkey', ['userId'], { unique: true })
@Entity('user', { schema: 'public' })
export class User {
  @Column('uuid', {
    primary: true,
    name: 'user_id',
    default: () => 'uuid_generate_v4()',
  })
  userId: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('text', { name: 'phone' })
  phone: string;

  @Column('text', { name: 'document' })
  document: string;

  @Column('text', { name: 'password' })
  password: string;

  @Column('text', { name: 'status' })
  status: string;

  @Column('text', { name: 'type' })
  type: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
