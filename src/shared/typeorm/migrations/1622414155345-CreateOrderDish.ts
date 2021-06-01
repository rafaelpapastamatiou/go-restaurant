import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOrderDish1622414155345
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order_dishes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'quantity',
            type: 'int',
            isNullable: false,
            default: 1,
          },
          {
            name: 'note',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dishId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'orderId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            isNullable: true,
            default: null,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['dishId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'dishes',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
            name: 'OrderDishesDish',
          },
          {
            columnNames: ['orderId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
            name: 'OrderDishesOrder',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('order_dishes');
  }
}
