import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../entities/user.entity';

export class UserAuthenticatedDTO {
  @ApiProperty({ description: `User`, type: User })
  user: User;

  @ApiProperty({ description: `JWT` })
  token: string;
}
