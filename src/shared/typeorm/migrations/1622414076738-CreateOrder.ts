import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOrder1622414076738 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'seatId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'accountId',
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
            name: 'OrderAccount',
          },
          {
            columnNames: ['seatId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'seats',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
            name: 'OrderAccount',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
