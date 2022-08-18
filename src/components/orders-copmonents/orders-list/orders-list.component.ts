import { UserType } from './../../../models/global.model';
import { GlobalService } from './../../../services/global.service';
import { Order } from './../../../models/orders.modal';
import { OrdersService } from './../../../services/orders.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.sass']
})
export class OrdersListComponent implements OnInit {
  ordersList$!: Observable<Order[]|undefined>;
  progressToEdit: {[key: number]: {progress:number}} = {};
  userType$: Observable<UserType|undefined>;
  constructor(private ordersService: OrdersService,
    private globalService: GlobalService) {
    this.userType$ = globalService.userType$;
    this.ordersList$ = ordersService.ordersList$;
  }

  ngOnInit() {
  }

  removeOrderHandle(order: Order){
    this.ordersService.removeOrder(order.ID);
  }

  startEditProgress(order:Order){
    this.progressToEdit[order.ID] = {progress: order.OrderHeader.Progress};
  }

  saveProgress(order: Order){
    if(this.progressToEdit[order['ID']]['progress'] >= 0 && this.progressToEdit[order['ID']]['progress'] <= 100){
      this.ordersService.editProgress(order['ID'], this.progressToEdit[order['ID']]['progress']);
      delete this.progressToEdit[order['ID']];
    }

  }

  cancelEditProgress(order: Order){
    delete this.progressToEdit[order['ID']];
  }

}
