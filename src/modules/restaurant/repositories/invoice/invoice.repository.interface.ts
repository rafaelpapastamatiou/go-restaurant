import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { CreateInvoiceDTO } from '../../dtos/invoice/create-invoice.dto';
import { InvoiceIdentifierDTO } from '../../dtos/invoice/invoice-identifier.dto';
import { Invoice } from '../../entities/invoice.entity';

export interface InvoiceRepositoryInterface {
  findAll(identifier: AccountIdentifierDTO): Promise<Invoice[]>;
  findById(identifier: InvoiceIdentifierDTO): Promise<Invoice>;
  createInvoice(data: CreateInvoiceDTO): Promise<Invoice>;
}
