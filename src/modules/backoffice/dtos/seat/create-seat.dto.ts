import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

import { AccountIdentifierDTO } from 'src/modules/auth/dtos/auth/account-identifier.dto';

export class CreateSeatDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Seat number` })
  @IsString()
  number: string;
}
