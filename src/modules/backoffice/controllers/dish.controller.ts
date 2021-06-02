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
import { classToClass } from 'class-transformer';

import { RequestUser } from 'src/shared/decorators/request-user.decorator';
import { AdminGuard } from 'src/shared/guards/admin.guard';
import { User } from '../../auth/entities/user.entity';
import { CreateDishRequestDTO } from '../dtos/dish/create-dish.dto';
import { UpdateDishRequestDTO } from '../dtos/dish/update-dish.dto';
import { DishService } from '../services/dish.service';

@Injectable()
@Controller('/dishes')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  @UseGuards(AdminGuard)
  async index(@RequestUser() user: User) {
    const dishes = await this.dishService.findAll({
      accountId: user.account.id,
    });

    return dishes;
  }

  @Get('/:id')
  @UseGuards(AdminGuard)
  async show(@Param('id') id: number, @RequestUser() user: User) {
    const dish = await this.dishService.findById({
      accountId: user.account.id,
      id,
    });

    return classToClass(dish);
  }

  @Post()
  @UseGuards(AdminGuard)
  async create(@RequestUser() user: User, @Body() data: CreateDishRequestDTO) {
    const dish = await this.dishService.create({
      accountId: user.account.id,
      ...data,
    });

    return classToClass(dish);
  }

  @Put('/:id')
  @UseGuards(AdminGuard)
  async update(
    @Param('id') id: number,
    @RequestUser() user: User,
    @Body() data: UpdateDishRequestDTO,
  ) {
    const dish = await this.dishService.update({
      accountId: user.account.id,
      id,
      ...data,
    });

    return classToClass(dish);
  }

  @Delete('/:id')
  @UseGuards(AdminGuard)
  async delete(@Param('id') id: number, @RequestUser() user: User) {
    await this.dishService.delete({
      accountId: user.account.id,
      id,
    });
  }
}
