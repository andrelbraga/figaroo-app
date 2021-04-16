import { MigrationInterface, QueryRunner } from 'typeorm';

export class myInit1618582089657 implements MigrationInterface {
  name = 'myInit1618582089657';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "last_name" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "email" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "document" TYPE numeric`,
    );
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
    await queryRunner.query(`ALTER TABLE "customers" ADD "age" numeric`);
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "phone" TYPE numeric`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "phone" TYPE numeric(13,0)`,
    );
    await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
    await queryRunner.query(`ALTER TABLE "customers" ADD "age" integer`);
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "document" TYPE numeric(15,0)`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "email" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "last_name" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "customers" ALTER COLUMN "name" SET NOT NULL`,
    );
  }
}
