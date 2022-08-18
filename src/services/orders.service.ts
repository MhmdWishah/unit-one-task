import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from 'src/models/orders.modal';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersList = new BehaviorSubject<Order[]|undefined>([]);
  get ordersList$(): Observable<Order[]|undefined>{
    return this.ordersList.asObservable();
  }
  constructor() { }

  addOrder(order: Order){
    const newOrdersList = this.ordersList.getValue();
    newOrdersList?.push({...order, ID: this.generateID});
    this.ordersList.next(newOrdersList);
  }

  removeOrder(id: number){
    const filteredList = this.ordersList.getValue()?.filter((order: Order) => order.ID !== id);
    this.ordersList.next([...filteredList!]);
  }

  editProgress(orderId: number, newProgressValue: number){
    const newList = this.ordersList.getValue()?.map(order => {
      if(orderId === order['ID']){
        return {...order, OrderHeader:{...order['OrderHeader'],Progress: newProgressValue}};
      }else return order;
    });
    this.ordersList.next(newList);
  }

  get generateID(): number{
    const length = this.ordersList.getValue()?.length;
    if(length){
      return this.ordersList.getValue()![length-1]?.ID + 1;
    } else {
      return 1;
    }
  }
}
