import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSeat1622412812516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'seats',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'number',
            type: 'varchar',
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
            name: 'SeatAccount',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('seats');
  }
}
