import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsOptional } from 'class-validator';

import { AccountIdentifierDTO } from 'src/shared/dtos/account/account-identifier.dto';

export class UpdateAccountDTO extends AccountIdentifierDTO {
  @ApiProperty({ description: `Account name` })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: `Account trade name` })
  @IsOptional()
  @IsString()
  tradeName?: string;

  @ApiProperty({ description: `Account name on url prefix` })
  @IsOptional()
  @IsString()
  accountUrl?: string;
}
