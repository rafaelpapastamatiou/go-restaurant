import {
  Controller,
  Injectable,
  Get,
  UseGuards,
  Param,
  Body,
  Put,
  Delete,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { classToClass } from 'class-transformer';

import { RequestUser } from 'src/shared/decorators/request-user.decorator';
import { AdminGuard } from 'src/shared/guards/admin.guard';
import { CreateUserRequestDTO } from '../dtos/user/create-user.dto';
import { UpdateUserRequestDTO } from '../dtos/user/update-user.dto';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Injectable()
@ApiTags('users')
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({ type: User, isArray: true })
  @UseGuards(AdminGuard)
  async index(@RequestUser() user: User) {
    const users = await this.userService.findByAccount({
      accountId: user.account.id,
    });

    return users;
  }

  @Get('/:id')
  @ApiOkResponse({ type: User })
  @UseGuards(AdminGuard)
  async show(@Param('id') id: number, @RequestUser() user: User) {
    const profile = await this.userService.findById({
      accountId: user.account.id,
      userId: id,
    });

    return classToClass(profile);
  }

  @Post()
  @ApiOkResponse({ type: User })
  @UseGuards(AdminGuard)
  async create(@RequestUser() user: User, @Body() data: CreateUserRequestDTO) {
    const updatedUser = await this.userService.create({
      accountId: user.account.id,
      ...data,
    });

    return classToClass(updatedUser);
  }

  @Put('/:id')
  @ApiOkResponse({ type: User })
  @UseGuards(AdminGuard)
  async update(
    @Param('id') id: number,
    @RequestUser() user: User,
    @Body() data: UpdateUserRequestDTO,
  ) {
    const updatedUser = await this.userService.update({
      accountId: user.account.id,
      userId: id,
      ...data,
    });

    return classToClass(updatedUser);
  }

  @Delete('/:id')
  @UseGuards(AdminGuard)
  async delete(@Param('id') id: number, @RequestUser() user: User) {
    await this.userService.delete({
      accountId: user.account.id,
      userId: id,
    });
  }
}
