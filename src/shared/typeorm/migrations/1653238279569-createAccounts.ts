import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAccounts1653238279569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "account",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: 'identity',
            generatedIdentity: 'ALWAYS',
            isGenerated: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "cpf",
            type: "varchar",
            isUnique: false,
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
    await queryRunner.dropTable("accounts");
  }
}
