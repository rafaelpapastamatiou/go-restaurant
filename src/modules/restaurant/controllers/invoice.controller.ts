import { Controller, Injectable, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { classToClass } from 'class-transformer';

import { RequestUser } from 'src/shared/decorators/request-user.decorator';
import { User } from '../../auth/entities/user.entity';
import { Invoice } from '../entities/invoice.entity';
import { InvoiceService } from '../services/invoice.service';

@Injectable()
@ApiTags('restaurant')
@Controller('/invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  @ApiOkResponse({ type: Invoice, isArray: true })
  async index(@RequestUser() user: User) {
    const invoices = await this.invoiceService.findAll({
      accountId: user.account.id,
    });

    return invoices;
  }

  @Get('/:id')
  @ApiOkResponse({ type: Invoice })
  async show(@Param('id') id: number, @RequestUser() user: User) {
    const invoice = await this.invoiceService.findById({
      accountId: user.account.id,
      id,
    });

    return classToClass(invoice);
  }
}
