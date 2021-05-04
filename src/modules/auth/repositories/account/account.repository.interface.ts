import { CreateAccountDTO } from '../../dtos/account/create-account.dto';
import { UpdateAccountDTO } from '../../dtos/account/update-account.dto';
import { Account } from '../../entities/account.entity';

export interface AccountRepositoryInterface {
  findById(id: number): Promise<Account>;
  createAccount(data: CreateAccountDTO): Promise<Account>;
  updateAccount(data: UpdateAccountDTO): Promise<Account>;
}
