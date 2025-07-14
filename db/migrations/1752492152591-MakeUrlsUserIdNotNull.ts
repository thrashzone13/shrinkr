import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeUrlsUserIdNotNull1752492152591 implements MigrationInterface {
    name = 'MakeUrlsUserIdNotNull1752492152591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`urls\` DROP FOREIGN KEY \`FK_5b194a4470977b71ff490dfc64b\``);
        await queryRunner.query(`ALTER TABLE \`urls\` CHANGE \`user_id\` \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`urls\` ADD CONSTRAINT \`FK_5b194a4470977b71ff490dfc64b\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`urls\` DROP FOREIGN KEY \`FK_5b194a4470977b71ff490dfc64b\``);
        await queryRunner.query(`ALTER TABLE \`urls\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`urls\` ADD CONSTRAINT \`FK_5b194a4470977b71ff490dfc64b\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
