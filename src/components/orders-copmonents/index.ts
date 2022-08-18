import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { Routes } from '@angular/router';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
export const ordersComponents = [
  OrderHeaderComponent,
  OrderDetailComponent,
  CreateOrderComponent,
  OrdersListComponent
]

