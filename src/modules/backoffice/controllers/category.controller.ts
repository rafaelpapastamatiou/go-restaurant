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
import { CreateCategoryRequestDTO } from '../dtos/category/create-category.dto';
import { UpdateCategoryRequestDTO } from '../dtos/category/update-category.dto';
import { CategoryService } from '../services/category.service';

@Injectable()
@Controller('/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @UseGuards(AdminGuard)
  async index(@RequestUser() user: User) {
    const categories = await this.categoryService.findAll({
      accountId: user.account.id,
    });

    return categories;
  }

  @Get('/:id')
  @UseGuards(AdminGuard)
  async show(@Param('id') id: number, @RequestUser() user: User) {
    const category = await this.categoryService.findById({
      accountId: user.account.id,
      id,
    });

    return classToClass(category);
  }

  @Post()
  @UseGuards(AdminGuard)
  async create(
    @RequestUser() user: User,
    @Body() data: CreateCategoryRequestDTO,
  ) {
    const category = await this.categoryService.create({
      accountId: user.account.id,
      ...data,
    });

    return classToClass(category);
  }

  @Put('/:id')
  @UseGuards(AdminGuard)
  async update(
    @Param('id') id: number,
    @RequestUser() user: User,
    @Body() data: UpdateCategoryRequestDTO,
  ) {
    const category = await this.categoryService.update({
      accountId: user.account.id,
      id,
      ...data,
    });

    return classToClass(category);
  }

  @Delete('/:id')
  @UseGuards(AdminGuard)
  async delete(@Param('id') id: number, @RequestUser() user: User) {
    await this.categoryService.delete({
      accountId: user.account.id,
      id,
    });
  }
}
