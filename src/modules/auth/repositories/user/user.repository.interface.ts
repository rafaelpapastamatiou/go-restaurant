import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';
import { UserIdentifierDTO } from 'src/shared/dtos/user/user-identifier.dto';
import { AuthenticateDTO } from '../../dtos/auth/authenticate.dto';
import { CreateUserDTO } from '../../dtos/user/create-user.dto';
import { UpdateUserDTO } from '../../dtos/user/update-user.dto';
import { User } from '../../entities/user.entity';

export interface UserRepositoryInterface {
  findAll(identifier: AccountIdentifierDTO): Promise<User[]>;
  findById(identifier: UserIdentifierDTO): Promise<User>;
  findWithCredentials(identifier: AuthenticateDTO): Promise<User>;
  createUser(data: CreateUserDTO): Promise<User>;
  updateUser(data: UpdateUserDTO): Promise<User>;
  deleteUser(identifier: UserIdentifierDTO): Promise<void>;
}
