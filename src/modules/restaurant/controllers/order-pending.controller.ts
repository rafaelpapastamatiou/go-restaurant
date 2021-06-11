import { Controller, Get, Injectable, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { RequestUser } from 'src/shared/decorators/request-user.decorator';
import { AdminGuard } from 'src/shared/guards/admin.guard';
import { User } from '../../auth/entities/user.entity';
import { Order } from '../entities/order.entity';
import { OrderService } from '../services/order.service';

@Injectable()
@ApiTags('restaurant')
@Controller('/ordersPending')
export class OrderPendingController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @UseGuards(AdminGuard)
  @ApiOkResponse({ type: Order, isArray: true })
  async index(@RequestUser() user: User) {
    const orders = await this.orderService.findAllPending({
      accountId: user.account.id,
    });

    return orders;
  }
}
