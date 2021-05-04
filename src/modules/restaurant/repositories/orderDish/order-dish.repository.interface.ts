import { CreateOrderDishDTO } from '../../dtos/orderDishes/create-order-dish-dto';
import { OrderDishIdentifierDTO } from '../../dtos/orderDishes/order-dish-identifier.dto';
import { UpdateOrderDishDTO } from '../../dtos/orderDishes/update-order-dish.dto';
import { OrderDish } from '../../entities/order-dish.entity';

export interface OrderDishRepositoryInterface {
  findByOrderId(orderId: number): Promise<OrderDish[]>;
  findByDishId(dishId: number): Promise<OrderDish[]>;
  findByOrderAndDish(identifier: OrderDishIdentifierDTO): Promise<OrderDish>;
  createOrderDish(data: CreateOrderDishDTO): Promise<OrderDish>;
  updateOrderDish(data: UpdateOrderDishDTO): Promise<OrderDish>;
  deleteOrderDish(identifier: OrderDishIdentifierDTO): Promise<void>;
}
