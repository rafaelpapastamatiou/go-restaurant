import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';
import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class UserEmailIdentifierDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `User email` })
  @IsString()
  email: string;
}
