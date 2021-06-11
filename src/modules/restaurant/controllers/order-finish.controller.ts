import { Body, Controller, Injectable, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { RequestUser } from 'src/shared/decorators/request-user.decorator';
import { User } from '../../auth/entities/user.entity';
import { FinishOrderRequestDTO } from '../dtos/order/finish-order.dto';
import { Invoice } from '../entities/invoice.entity';
import { InvoiceService } from '../services/invoice.service';
import { OrderService } from '../services/order.service';

@Injectable()
@ApiTags('restaurant')
@Controller('/orders/:id/finish')
export class OrderFinishController {
  constructor(
    private readonly orderService: OrderService,
    private readonly invoiceService: InvoiceService,
  ) {}

  @Post()
  @ApiOkResponse({ type: Invoice })
  async create(
    @Param('id') id: number,
    @RequestUser() user: User,
    @Body() { client }: FinishOrderRequestDTO,
  ) {
    const order = await this.orderService.finish({
      accountId: user.account.id,
      id,
    });

    const orderTotal = order.orderDishes.reduce(
      (acc, next) => acc + next.quantity * next.dish.price,
      0,
    );

    const invoice = await this.invoiceService.create({
      accountId: user.account.id,
      orderId: order.id,
      userId: user.id,
      client,
      value: orderTotal,
    });

    return invoice;
  }
}
