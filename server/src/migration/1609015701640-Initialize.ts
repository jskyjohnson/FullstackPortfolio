import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1609015701640 implements MigrationInterface {
    name = 'Initialize1609015701640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sample_crud_post" ("id" SERIAL NOT NULL, "title" text, "content" text array, "datePosted" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_54e37bf4b30c038a657c0ef0ce2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" text, "password" text, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "sample_crud_post"`);
    }

}
