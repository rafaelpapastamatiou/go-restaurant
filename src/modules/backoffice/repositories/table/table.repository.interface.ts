import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateTableDTO } from '../../dtos/table/create-table.dto';
import { TableIdentifierDTO } from '../../dtos/table/table-identifier.dto';
import { TableNumberIdentifierDTO } from '../../dtos/table/table-number-identifier.dto';
import { UpdateTableDTO } from '../../dtos/table/update-table.dto';
import { Table } from '../../entities/table.entity';

export interface TableRepositoryInterface {
  findById(identifier: TableIdentifierDTO): Promise<Table>;
  findAll(identifier: AccountIdentifierDTO): Promise<Table[]>;
  findByNumber(identifier: TableNumberIdentifierDTO): Promise<Table>;
  createTable(data: CreateTableDTO): Promise<Table>;
  updateTable(data: UpdateTableDTO): Promise<Table>;
  deleteTable(identifier: TableIdentifierDTO): Promise<void>;
}
