import {
  Controller,
  Injectable,
  Get,
  UseGuards,
  Param,
  Body,
  Put,
  Delete,
  Post,
} from '@nestjs/common';
import { classToClass } from 'class-transformer';

import { RequestUser } from 'src/shared/decorators/request-user.decorator';
import { AdminGuard } from 'src/shared/guards/admin.guard';
import { User } from '../../auth/entities/user.entity';
import { CreateTableRequestDTO } from '../dtos/table/create-table.dto';
import { UpdateTableRequestDTO } from '../dtos/table/update-table.dto';
import { TableService } from '../services/table.service';

@Injectable()
@Controller('/tables')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  @UseGuards(AdminGuard)
  async index(@RequestUser() user: User) {
    const tables = await this.tableService.findAll({
      accountId: user.account.id,
    });

    return tables;
  }

  @Get('/:id')
  @UseGuards(AdminGuard)
  async show(@Param('id') id: number, @RequestUser() user: User) {
    const table = await this.tableService.findById({
      accountId: user.account.id,
      id,
    });

    return classToClass(table);
  }

  @Post()
  @UseGuards(AdminGuard)
  async create(@RequestUser() user: User, @Body() data: CreateTableRequestDTO) {
    const table = await this.tableService.create({
      accountId: user.account.id,
      ...data,
    });

    return classToClass(table);
  }

  @Put('/:id')
  @UseGuards(AdminGuard)
  async update(
    @Param('id') id: number,
    @RequestUser() user: User,
    @Body() data: UpdateTableRequestDTO,
  ) {
    const table = await this.tableService.update({
      accountId: user.account.id,
      id,
      ...data,
    });

    return classToClass(table);
  }

  @Delete('/:id')
  @UseGuards(AdminGuard)
  async delete(@Param('id') id: number, @RequestUser() user: User) {
    await this.tableService.delete({
      accountId: user.account.id,
      id,
    });
  }
}
