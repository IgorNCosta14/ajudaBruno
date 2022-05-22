import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class accountTransactions1653242861082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "account_transactions",
        columns: [
          {
            name: "id",
            type: "numeric",
            isPrimary: true,
          },
          {
            name: "account_id",
            type: "numeric",
          },
          {
            name: "type",
            type: "enum",
            enum: ["deposit", "TED", "PIX"],
          },
          {
            name: "amount",
            type: "numeric",
          },
          {
            name: "origin_bank",
            type: "varchar",
          },
          {
            name: "origin_branch",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("account_transactions");
  }
}
