import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1610244835018 implements MigrationInterface {
    name = 'Init1610244835018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "name" text, "password" text, CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "homepage" ("id" SERIAL NOT NULL, "hero_intro" text, "intro_text" text, "carousel_text" text, "hero_portrait" text, "carousel_text_values" text array, CONSTRAINT "PK_8341e9d8392426fd37436aaca9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "title" text, "subtitle" text, "category" text, "filter" text, "thumbnail" text, "date" text, "meta" text, "description" text array, "images" text array, "userId" integer NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_menu" ("id" SERIAL NOT NULL, "json" text, CONSTRAINT "PK_246b58fe0ac79d24c416ce22cc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "socials" ("id" SERIAL NOT NULL, "json" text, CONSTRAINT "PK_5e3ee018e1b66c619ae3d3b3309" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "title_name" text, "first_name" text, "last_name" text, "footerMessage" text, "aboutAbout_pic" text, "aboutAbout_header_message" text, "aboutExperience" text, "aboutSoftwares" text, "aboutInfo" text array, "aboutBios" text array, "contactEmail" text, "contactLocation" text, "contactLat" text, "contactLong" text, "contactServices" text, "contactContactmessage" text array, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "socials"`);
        await queryRunner.query(`DROP TABLE "project_menu"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "homepage"`);
        await queryRunner.query(`DROP TABLE "admin"`);
    }
}
