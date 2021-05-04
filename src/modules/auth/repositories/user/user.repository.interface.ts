import { UserIdentifierDTO } from 'src/shared/dtos/user/user-identifier.dto';
import { CreateUserDTO } from '../../dtos/user/create-user.dto';
import { UpdateUserDTO } from '../../dtos/user/update-user.dto';
import { User } from '../../entities/user.entity';

export interface UserRepositoryInterface {
  findByAccountId(accountId: number): Promise<User[]>;
  findById(identifier: UserIdentifierDTO): Promise<User>;
  createUser(data: CreateUserDTO): Promise<User>;
  updateUser(data: UpdateUserDTO): Promise<User>;
  deleteUser(identifier: UserIdentifierDTO): Promise<void>;
}
