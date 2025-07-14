import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUrlsTable1752492042844 implements MigrationInterface {
    name = 'CreateUrlsTable1752492042844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`urls\` (\`id\` int NOT NULL AUTO_INCREMENT, \`url\` varchar(255) NOT NULL, \`hash\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`urls\` ADD CONSTRAINT \`FK_5b194a4470977b71ff490dfc64b\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`urls\` DROP FOREIGN KEY \`FK_5b194a4470977b71ff490dfc64b\``);
        await queryRunner.query(`DROP TABLE \`urls\``);
    }

}
