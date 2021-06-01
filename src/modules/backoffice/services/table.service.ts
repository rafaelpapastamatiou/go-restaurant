import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateTableDTO } from '../dtos/table/create-table.dto';
import { TableIdentifierDTO } from '../dtos/table/table-identifier.dto';
import { UpdateTableDTO } from '../dtos/table/update-table.dto';
import { Table } from '../entities/table.entity';
import { TableRepository } from '../repositories/table/table.repository';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(TableRepository)
    private readonly tableRepository: TableRepository,
  ) {}

  async findById(identifier: TableIdentifierDTO): Promise<Table> {
    const dish = await this.tableRepository.findById(identifier);

    return dish;
  }

  async findAll(identifier: AccountIdentifierDTO): Promise<Table[]> {
    const dishes = await this.tableRepository.findAll(identifier);

    return dishes;
  }

  async create(data: CreateTableDTO): Promise<Table> {
    const dish = await this.tableRepository.createTable(data);

    return dish;
  }

  async update(data: UpdateTableDTO): Promise<Table> {
    const dish = await this.tableRepository.updateTable(data);

    return dish;
  }

  async delete(identifier: TableIdentifierDTO): Promise<void> {
    await this.tableRepository.deleteTable(identifier);
  }
}
