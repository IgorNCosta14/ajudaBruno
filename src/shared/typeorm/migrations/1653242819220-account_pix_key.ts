import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class accountPixKey1653242819220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "account_pix_key",
              columns: [
                
              ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("account_pix_key")
    }

}
