import { Repository, EntityRepository } from 'typeorm';
import { CreateInvoiceDTO } from '../../dtos/invoice/create-invoice.dto';
import { InvoiceIdentifierDTO } from '../../dtos/invoice/invoice-identifier.dto';

import { Invoice } from '../../entities/invoice.entity';
import { InvoiceRepositoryInterface } from './invoice.repository.interface';

@EntityRepository(Invoice)
export class InvoiceRepository
  extends Repository<Invoice>
  implements InvoiceRepositoryInterface {
  async findByAccountId(accountId: number): Promise<Invoice[]> {
    const invoices = await this.find({
      where: { accountId },
    });

    return invoices;
  }

  async findById({ id, accountId }: InvoiceIdentifierDTO): Promise<Invoice> {
    const invoice = await this.findOne({
      where: {
        id,
        accountId,
      },
    });

    return invoice;
  }

  async createInvoice({
    accountId,
    client,
    userId,
    value,
  }: CreateInvoiceDTO): Promise<Invoice> {
    const invoice = this.create({
      accountId,
      userId,
      client,
      value,
    });

    await this.save(invoice);

    return invoice;
  }
}
