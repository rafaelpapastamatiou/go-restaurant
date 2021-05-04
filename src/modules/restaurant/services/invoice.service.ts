import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateInvoiceDTO } from '../dtos/invoice/create-invoice.dto';
import { InvoiceIdentifierDTO } from '../dtos/invoice/invoice-identifier.dto';
import { Invoice } from '../entities/invoice.entity';
import { InvoiceRepository } from '../repositories/invoice/invoice.repository';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceRepository)
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  async findById(identifier: InvoiceIdentifierDTO): Promise<Invoice> {
    const invoice = await this.invoiceRepository.findById(identifier);

    return invoice;
  }

  async findAll(identifier: AccountIdentifierDTO): Promise<Invoice[]> {
    const invoices = await this.invoiceRepository.findAll(identifier);

    return invoices;
  }

  async create(data: CreateInvoiceDTO): Promise<Invoice> {
    const invoice = await this.invoiceRepository.createInvoice(data);

    return invoice;
  }
}
