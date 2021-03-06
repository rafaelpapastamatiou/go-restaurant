import { Account } from 'src/modules/auth/entities/account.entity';

export interface JwtPayload {
  id: number;
  name: string;
  email: string;
  account: Account;
  admin?: boolean;
}
