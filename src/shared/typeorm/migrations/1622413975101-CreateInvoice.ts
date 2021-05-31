import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateInvoice1622413975101 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'invoices',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'value',
            type: 'double',
            isNullable: false,
          },
          {
            name: 'client',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'accountId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'userId',
            type: 'int',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['accountId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'accounts',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
            name: 'InvoiceAccount',
          },
          {
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
            name: 'InvoiceUser',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('invoices');
  }
}
