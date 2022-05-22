import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class accountBalance1653242794061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "account_balance",
              columns: [
                  {
                    name: "id",
                    type: "numeric"
                  },
                {
                    name: "account",
                    type: "numeric",
                    isPrimary: true,
                },
                {
                    name: "balance",
                    type: "numeric",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
              ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("account_balance")
    }

}
