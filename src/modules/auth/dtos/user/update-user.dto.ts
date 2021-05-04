import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

import { UserIdentifierDTO } from 'src/shared/dtos/user/user-identifier.dto';

export class UpdateUserDTO extends UserIdentifierDTO {
  @ApiProperty({ description: `User name` })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: `User e-mail` })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({ description: `User password` })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiProperty({ description: `User old password` })
  @IsOptional()
  @IsString()
  oldPassword?: string;

  @ApiProperty({ description: `User is admin` })
  @IsOptional()
  @IsBoolean()
  admin?: boolean;

  @IsOptional()
  @IsNumber()
  currentUserId?: number;
}
