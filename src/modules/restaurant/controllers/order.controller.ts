import {
  Controller,
  Injectable,
  Get,
  Param,
  Body,
  Delete,
  Post,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiOkResponse } from '@nestjs/swagger';
import { classToClass } from 'class-transformer';

import { RequestUser } from 'src/shared/decorators/request-user.decorator';
import { User } from '../../auth/entities/user.entity';
import { CreateOrderRequestDTO } from '../dtos/order/create-order.dto';
import { OrderDish } from '../entities/order-dish.entity';
import { Order } from '../entities/order.entity';
import { OrderService } from '../services/order.service';

@Injectable()
@Controller('/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ApiOkResponse({ type: Order, isArray: true })
  async index(@RequestUser() user: User) {
    const categories = await this.orderService.findAll({
      accountId: user.account.id,
    });

    return categories;
  }

  @Get('/:id')
  @ApiOkResponse({ type: Order })
  async show(@Param('id') id: number, @RequestUser() user: User) {
    const category = await this.orderService.findById({
      accountId: user.account.id,
      id,
    });

    return classToClass(category);
  }

  @Post()
  @ApiOkResponse({ type: Order, status: 201 })
  async create(@RequestUser() user: User, @Body() data: CreateOrderRequestDTO) {
    const order = await this.orderService.create({
      accountId: user.account.id,
      ...data,
    });

    return classToClass(order);
  }

  @Delete('/:id')
  @ApiNoContentResponse()
  async delete(@Param('id') id: number, @RequestUser() user: User) {
    await this.orderService.delete({
      accountId: user.account.id,
      id,
    });
  }
}
