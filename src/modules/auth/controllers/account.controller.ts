import { Controller, Injectable, Post, Body } from '@nestjs/common';

import { Public } from 'src/shared/decorators/public.decorator';
import { CreateAccountDTO } from '../dtos/account/create-account.dto';
import { AccountService } from '../services/account.service';

@Injectable()
@Controller('/signup')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Public()
  @Post()
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
