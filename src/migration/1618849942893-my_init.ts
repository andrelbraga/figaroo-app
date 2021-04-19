import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1618849942893 implements MigrationInterface {
    name = 'myInit1618849942893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "document" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "document" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "name" DROP NOT NULL`);
    }

}
