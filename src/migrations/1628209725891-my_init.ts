import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1628209725891 implements MigrationInterface {
    name = 'myInit1628209725891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."customer" ("customer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "last_name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "phone" text NOT NULL, "document" text, "sur_name" text, "nationality" text, "avatar_path" text, "age" numeric, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_dee6a0ab7759bbb03aca13915d3" PRIMARY KEY ("customer_id"))`);
        await queryRunner.query(`CREATE TABLE "public"."service" ("service_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "description" text NOT NULL, "price" numeric(10,0) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0), "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_4501d9a8448cf21a8100cec1e6d" PRIMARY KEY ("service_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "service_pkey" ON "public"."service" ("service_id") `);
        await queryRunner.query(`CREATE TABLE "public"."schedule" ("schedule_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text NOT NULL, "starts_at" TIME, "ends_at" TIME, "scheduling_date" date, "status" text, "updated_at" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0), "employe_id" uuid, "service_id" uuid, "customer_id" uuid, CONSTRAINT "PK_32f8d5a89767a6cb077e72546ce" PRIMARY KEY ("schedule_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "schedules_pkey1" ON "public"."schedule" ("schedule_id") `);
        await queryRunner.query(`CREATE TABLE "public"."skill" ("skill_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0), "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_f1117ff319f070e8e3a300c71f2" PRIMARY KEY ("skill_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "skill_pkey" ON "public"."skill" ("skill_id") `);
        await queryRunner.query(`CREATE TABLE "public"."employe" ("employe_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "last_name" text NOT NULL, "email" text NOT NULL, "document" text NOT NULL, "nationality" text, "birthdate" date NOT NULL, "phone" text NOT NULL, "sur_name" text NOT NULL, "years_business" text NOT NULL, "password" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0), "updated_at" TIMESTAMP NOT NULL, "age" text, CONSTRAINT "PK_300c8e2db5c17e6b99c4689f301" PRIMARY KEY ("employe_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "employe_pkey" ON "public"."employe" ("employe_id") `);
        await queryRunner.query(`CREATE TABLE "public"."employer" ("employer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "document" text NOT NULL, "email" text NOT NULL, "birthdate" date NOT NULL, "name" text NOT NULL, "last_name" text, "password" text NOT NULL, "avatar_path" text, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0), "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_1f532bc38aa861e7b075bd8a45f" PRIMARY KEY ("employer_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "employer_pkey" ON "public"."employer" ("employer_id") `);
        await queryRunner.query(`CREATE TABLE "public"."merchant" ("merchant_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "description" text, "employees" numeric(3,0), "document" numeric(20,0), "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "employer_id" uuid, CONSTRAINT "PK_1ef35354c0a8756703335898101" PRIMARY KEY ("merchant_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "merchant_pkey" ON "public"."merchant" ("merchant_id") `);
        await queryRunner.query(`CREATE TABLE "public"."address" ("address_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" text NOT NULL, "number" numeric(5,0) NOT NULL, "state" text NOT NULL, "country" text, "city" text NOT NULL, "zip" numeric(9,0) NOT NULL, "complement" text, "district" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0), "updated_at" TIMESTAMP NOT NULL, "merchant_id" uuid, CONSTRAINT "PK_dda7b41112d4ec17c794a3da791" PRIMARY KEY ("address_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "address_pkey" ON "public"."address" ("address_id") `);
        await queryRunner.query(`CREATE TABLE "public"."history" ("history_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0), CONSTRAINT "PK_e26f14b2ee9527e5c89eca91583" PRIMARY KEY ("history_id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "history_pkey" ON "public"."history" ("history_id") `);
        await queryRunner.query(`CREATE TABLE "public"."customer_has_merchants" ("customer_id" uuid NOT NULL, "merchant_id" uuid NOT NULL, CONSTRAINT "PK_be96539b4b67180c009f34ce02e" PRIMARY KEY ("customer_id", "merchant_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d21af7cba1a6c53726329456f0" ON "public"."customer_has_merchants" ("customer_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6b32096915a9899f4d6f7a8c5c" ON "public"."customer_has_merchants" ("merchant_id") `);
        await queryRunner.query(`CREATE TABLE "public"."customer_has_employe" ("customer_id" uuid NOT NULL, "employe_id" uuid NOT NULL, CONSTRAINT "PK_f9e7171afb5f7b963788643d443" PRIMARY KEY ("customer_id", "employe_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5f3413539567bff5266565b698" ON "public"."customer_has_employe" ("customer_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_67b3c68e6faa247d8f3f635275" ON "public"."customer_has_employe" ("employe_id") `);
        await queryRunner.query(`CREATE TABLE "public"."employe_has_skills" ("employe_id" uuid NOT NULL, "skill_id" uuid NOT NULL, CONSTRAINT "PK_632f7f1a3e262c8f259eaadc420" PRIMARY KEY ("employe_id", "skill_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bc5596916fccd2dc384c449d7b" ON "public"."employe_has_skills" ("employe_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c9c011a3dcb538e5f2589a3ae4" ON "public"."employe_has_skills" ("skill_id") `);
        await queryRunner.query(`CREATE TABLE "public"."employe_has_services" ("employe_id" uuid NOT NULL, "service_id" uuid NOT NULL, CONSTRAINT "PK_a50defd574198e17fdae55b2409" PRIMARY KEY ("employe_id", "service_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cec8c1c5258f75210d8e424ee0" ON "public"."employe_has_services" ("employe_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a2e2406b7c0cc0e712cee1db2c" ON "public"."employe_has_services" ("service_id") `);
        await queryRunner.query(`CREATE TABLE "public"."employe_has_merchants" ("employe_id" uuid NOT NULL, "merchant_id" uuid NOT NULL, CONSTRAINT "PK_0351880ea0c98ea0df808454299" PRIMARY KEY ("employe_id", "merchant_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bee1f1785f8cae5dc0e5d7f0bb" ON "public"."employe_has_merchants" ("employe_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_f5bea8f751a5827597acf9716f" ON "public"."employe_has_merchants" ("merchant_id") `);
        await queryRunner.query(`CREATE TABLE "public"."merchant_has_services" ("merchant_id" uuid NOT NULL, "service_id" uuid NOT NULL, CONSTRAINT "PK_be08cc21c8e41c979c8da5ffcdf" PRIMARY KEY ("merchant_id", "service_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_26735e48cdd55f05384ca6345a" ON "public"."merchant_has_services" ("merchant_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_19fe7998249cf911b644454418" ON "public"."merchant_has_services" ("service_id") `);
        await queryRunner.query(`ALTER TABLE "public"."schedule" ADD CONSTRAINT "FK_68d12d604c36f72e383ae93f3c3" FOREIGN KEY ("employe_id") REFERENCES "public"."employe"("employe_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."schedule" ADD CONSTRAINT "FK_bad2bd8e10df454144e3568de2f" FOREIGN KEY ("service_id") REFERENCES "public"."service"("service_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."schedule" ADD CONSTRAINT "FK_059b69a0a01659f6b3aa3cef22f" FOREIGN KEY ("customer_id") REFERENCES "public"."customer"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."merchant" ADD CONSTRAINT "FK_a392da0694f8a6469cb83cfa344" FOREIGN KEY ("employer_id") REFERENCES "public"."employer"("employer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."address" ADD CONSTRAINT "FK_612bc4e4703dd55e888406b8539" FOREIGN KEY ("merchant_id") REFERENCES "public"."merchant"("merchant_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."customer_has_merchants" ADD CONSTRAINT "FK_d21af7cba1a6c53726329456f0d" FOREIGN KEY ("customer_id") REFERENCES "public"."customer"("customer_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."customer_has_merchants" ADD CONSTRAINT "FK_6b32096915a9899f4d6f7a8c5cb" FOREIGN KEY ("merchant_id") REFERENCES "public"."merchant"("merchant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."customer_has_employe" ADD CONSTRAINT "FK_5f3413539567bff5266565b6984" FOREIGN KEY ("customer_id") REFERENCES "public"."customer"("customer_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."customer_has_employe" ADD CONSTRAINT "FK_67b3c68e6faa247d8f3f6352752" FOREIGN KEY ("employe_id") REFERENCES "public"."employe"("employe_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_skills" ADD CONSTRAINT "FK_bc5596916fccd2dc384c449d7b6" FOREIGN KEY ("employe_id") REFERENCES "public"."employe"("employe_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_skills" ADD CONSTRAINT "FK_c9c011a3dcb538e5f2589a3ae4c" FOREIGN KEY ("skill_id") REFERENCES "public"."skill"("skill_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_services" ADD CONSTRAINT "FK_cec8c1c5258f75210d8e424ee0b" FOREIGN KEY ("employe_id") REFERENCES "public"."employe"("employe_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_services" ADD CONSTRAINT "FK_a2e2406b7c0cc0e712cee1db2cd" FOREIGN KEY ("service_id") REFERENCES "public"."service"("service_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_merchants" ADD CONSTRAINT "FK_bee1f1785f8cae5dc0e5d7f0bb1" FOREIGN KEY ("employe_id") REFERENCES "public"."employe"("employe_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_merchants" ADD CONSTRAINT "FK_f5bea8f751a5827597acf9716f1" FOREIGN KEY ("merchant_id") REFERENCES "public"."merchant"("merchant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."merchant_has_services" ADD CONSTRAINT "FK_26735e48cdd55f05384ca6345a2" FOREIGN KEY ("merchant_id") REFERENCES "public"."merchant"("merchant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."merchant_has_services" ADD CONSTRAINT "FK_19fe7998249cf911b6444544188" FOREIGN KEY ("service_id") REFERENCES "public"."service"("service_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."merchant_has_services" DROP CONSTRAINT "FK_19fe7998249cf911b6444544188"`);
        await queryRunner.query(`ALTER TABLE "public"."merchant_has_services" DROP CONSTRAINT "FK_26735e48cdd55f05384ca6345a2"`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_merchants" DROP CONSTRAINT "FK_f5bea8f751a5827597acf9716f1"`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_merchants" DROP CONSTRAINT "FK_bee1f1785f8cae5dc0e5d7f0bb1"`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_services" DROP CONSTRAINT "FK_a2e2406b7c0cc0e712cee1db2cd"`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_services" DROP CONSTRAINT "FK_cec8c1c5258f75210d8e424ee0b"`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_skills" DROP CONSTRAINT "FK_c9c011a3dcb538e5f2589a3ae4c"`);
        await queryRunner.query(`ALTER TABLE "public"."employe_has_skills" DROP CONSTRAINT "FK_bc5596916fccd2dc384c449d7b6"`);
        await queryRunner.query(`ALTER TABLE "public"."customer_has_employe" DROP CONSTRAINT "FK_67b3c68e6faa247d8f3f6352752"`);
        await queryRunner.query(`ALTER TABLE "public"."customer_has_employe" DROP CONSTRAINT "FK_5f3413539567bff5266565b6984"`);
        await queryRunner.query(`ALTER TABLE "public"."customer_has_merchants" DROP CONSTRAINT "FK_6b32096915a9899f4d6f7a8c5cb"`);
        await queryRunner.query(`ALTER TABLE "public"."customer_has_merchants" DROP CONSTRAINT "FK_d21af7cba1a6c53726329456f0d"`);
        await queryRunner.query(`ALTER TABLE "public"."address" DROP CONSTRAINT "FK_612bc4e4703dd55e888406b8539"`);
        await queryRunner.query(`ALTER TABLE "public"."merchant" DROP CONSTRAINT "FK_a392da0694f8a6469cb83cfa344"`);
        await queryRunner.query(`ALTER TABLE "public"."schedule" DROP CONSTRAINT "FK_059b69a0a01659f6b3aa3cef22f"`);
        await queryRunner.query(`ALTER TABLE "public"."schedule" DROP CONSTRAINT "FK_bad2bd8e10df454144e3568de2f"`);
        await queryRunner.query(`ALTER TABLE "public"."schedule" DROP CONSTRAINT "FK_68d12d604c36f72e383ae93f3c3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_19fe7998249cf911b644454418"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_26735e48cdd55f05384ca6345a"`);
        await queryRunner.query(`DROP TABLE "public"."merchant_has_services"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f5bea8f751a5827597acf9716f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bee1f1785f8cae5dc0e5d7f0bb"`);
        await queryRunner.query(`DROP TABLE "public"."employe_has_merchants"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a2e2406b7c0cc0e712cee1db2c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cec8c1c5258f75210d8e424ee0"`);
        await queryRunner.query(`DROP TABLE "public"."employe_has_services"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9c011a3dcb538e5f2589a3ae4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc5596916fccd2dc384c449d7b"`);
        await queryRunner.query(`DROP TABLE "public"."employe_has_skills"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_67b3c68e6faa247d8f3f635275"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f3413539567bff5266565b698"`);
        await queryRunner.query(`DROP TABLE "public"."customer_has_employe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6b32096915a9899f4d6f7a8c5c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d21af7cba1a6c53726329456f0"`);
        await queryRunner.query(`DROP TABLE "public"."customer_has_merchants"`);
        await queryRunner.query(`DROP INDEX "public"."history_pkey"`);
        await queryRunner.query(`DROP TABLE "public"."history"`);
        await queryRunner.query(`DROP INDEX "public"."address_pkey"`);
        await queryRunner.query(`DROP TABLE "public"."address"`);
        await queryRunner.query(`DROP INDEX "public"."merchant_pkey"`);
        await queryRunner.query(`DROP TABLE "public"."merchant"`);
        await queryRunner.query(`DROP INDEX "public"."employer_pkey"`);
        await queryRunner.query(`DROP TABLE "public"."employer"`);
        await queryRunner.query(`DROP INDEX "public"."employe_pkey"`);
        await queryRunner.query(`DROP TABLE "public"."employe"`);
        await queryRunner.query(`DROP INDEX "public"."skill_pkey"`);
        await queryRunner.query(`DROP TABLE "public"."skill"`);
        await queryRunner.query(`DROP INDEX "public"."schedules_pkey1"`);
        await queryRunner.query(`DROP TABLE "public"."schedule"`);
        await queryRunner.query(`DROP INDEX "public"."service_pkey"`);
        await queryRunner.query(`DROP TABLE "public"."service"`);
        await queryRunner.query(`DROP TABLE "public"."customer"`);
    }

}
