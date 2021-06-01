import { HttpException, HttpStatus } from '@nestjs/common';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { Repository, EntityRepository } from 'typeorm';
import { CreateTableDTO } from '../../dtos/table/create-table.dto';
import { TableIdentifierDTO } from '../../dtos/table/table-identifier.dto';
import { TableNumberIdentifierDTO } from '../../dtos/table/table-number-identifier.dto';
import { UpdateTableDTO } from '../../dtos/table/update-table.dto';

import { Table } from '../../entities/table.entity';
import { TableRepositoryInterface } from './table.repository.interface';

@EntityRepository(Table)
export class TableRepository
  extends Repository<Table>
  implements TableRepositoryInterface {
  async findById({ id, accountId }: TableIdentifierDTO): Promise<Table> {
    const table = await this.findOne({
      where: {
        id,
        accountId,
      },
    });

    return table;
  }

  async findByNumber({
    accountId,
    number,
  }: TableNumberIdentifierDTO): Promise<Table> {
    const table = await this.findOne({
      where: { accountId, number },
    });

    return table;
  }

  async findAll({ accountId }: AccountIdentifierDTO): Promise<Table[]> {
    const tables = await this.find({
      where: {
        accountId,
      },
    });

    return tables;
  }

  async createTable({ accountId, number }: CreateTableDTO): Promise<Table> {
    const tableAlreadyExists = await this.findByNumber({
      accountId,
      number,
    });

    if (tableAlreadyExists) {
      throw new HttpException(
        'Table with same number already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const table = this.create({
      accountId,
      number,
    });

    await this.save(table);

    return table;
  }

  async updateTable({
    accountId,
    id,
    ...newValues
  }: UpdateTableDTO): Promise<Table> {
    let table = await this.findById({ accountId, id });

    if (!table) {
      throw new HttpException('Table not found', HttpStatus.BAD_REQUEST);
    }

    table = Object.assign(table, { ...newValues });

    await this.save(table);

    return table;
  }

  async deleteTable({ id, accountId }: TableIdentifierDTO): Promise<void> {
    const table = await this.findById({ accountId, id });

    if (!table) {
      throw new HttpException('Table not found', HttpStatus.BAD_REQUEST);
    }

    await this.remove(table);
  }
}
