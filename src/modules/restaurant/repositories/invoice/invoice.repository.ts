import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { Repository, EntityRepository } from 'typeorm';
import { CreateInvoiceDTO } from '../../dtos/invoice/create-invoice.dto';
import { InvoiceIdentifierDTO } from '../../dtos/invoice/invoice-identifier.dto';

import { Invoice } from '../../entities/invoice.entity';
import { InvoiceRepositoryInterface } from './invoice.repository.interface';

@EntityRepository(Invoice)
export class InvoiceRepository
  extends Repository<Invoice>
  implements InvoiceRepositoryInterface {
  async findAll({ accountId }: AccountIdentifierDTO): Promise<Invoice[]> {
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

  async createInvoice(data: CreateInvoiceDTO): Promise<Invoice> {
    const invoice = this.create(data);

    await this.save(invoice);

    return invoice;
  }
}
