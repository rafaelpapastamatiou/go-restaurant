import { Controller, Injectable, Get, UseGuards } from '@nestjs/common';

import { RequestUser } from 'src/shared/decorators/request-user.decorator';
import { AdminGuard } from 'src/shared/guards/admin.guard';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Injectable()
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AdminGuard)
  async index(@RequestUser() user: User) {
    const users = this.userService.findByAccount({
      accountId: user.account.id,
    });

    return users;
  }
}
