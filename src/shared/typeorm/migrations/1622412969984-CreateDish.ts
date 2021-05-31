import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateDish1622412969984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dishes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'double',
            isNullable: false,
          },
          {
            name: 'accountId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'categoryId',
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
            name: 'DishAccount',
          },
          {
            columnNames: ['categoryId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
            name: 'DishCategory',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dishes');
  }
}
