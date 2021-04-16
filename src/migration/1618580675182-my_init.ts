import { MigrationInterface, QueryRunner } from 'typeorm';

export class myInit1618580675182 implements MigrationInterface {
  name = 'myInit1618580675182';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customers" ("customer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "last_name" text NOT NULL, "email" text NOT NULL, "document" integer, "sur_name" text, "age" integer, "nationality" text, "avatar_path" text, "phone" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_6c444ce6637f2c1d71c3cf136c1" PRIMARY KEY ("customer_id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "customers"`);
  }
}
