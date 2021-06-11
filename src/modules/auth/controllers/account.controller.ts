import { Controller, Injectable, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Public } from 'src/shared/decorators/public.decorator';
import { CreateAccountDTO } from '../dtos/account/create-account.dto';
import { Account } from '../entities/account.entity';
import { AccountService } from '../services/account.service';

@Injectable()
@ApiTags('account')
@Controller('/signup')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Public()
  @Post()
  @ApiOkResponse({ type: Account })
  async signup(
    @Body() { name, tradeName, accountUrl, email, password }: CreateAccountDTO,
  ) {
    const account = await this.accountService.create({
      name,
      tradeName,
      accountUrl,
      email,
      password,
    });

    return account;
  }
}
