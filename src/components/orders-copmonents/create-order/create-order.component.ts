import { OrdersService } from './../../../services/orders.service';
import { OrderDetail } from 'src/models/orders.modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderDetailComponent } from './../order-detail/order-detail.component';
import { OrderHeaderComponent } from './../order-header/order-header.component';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.sass']
})
export class CreateOrderComponent implements OnInit, OnChanges {
  headerOrderForm!: FormGroup;
  detailsList = new BehaviorSubject<OrderDetail[]|undefined>([]);
  private submitted: boolean = false;

  selectedPanel: number = 0;
  constructor(
    private fb: FormBuilder,
    public cdr: ChangeDetectorRef,
    private ordersService: OrdersService) {
    this.initHeaderOrderForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }

  setSelectedPanel(num: number){
    this.selectedPanel = num;
  }

  createOrderHandle(){
    this.submitted= true;
    this.headerOrderForm.markAllAsTouched();
    this.cdr.markForCheck()
    // console.log("headerform:",this.headerOrderForm)
    if(this.headerOrderForm.valid){
      this.ordersService.addOrder({
        ID: 0,
        OrderHeader: { ...this.headerOrderForm.value },
        OrderDetails: [ ...this.detailsList.getValue()! ]
      })
    }
  }

  initHeaderOrderForm(){
    this.headerOrderForm = this.fb.group(
      {
        OperationDescription: ["", [Validators.required]],
        StartDate: [new Date(), [Validators.required]],
        EndDate: [new Date(new Date().setMonth(new Date().getMonth() + 1)), [Validators.required]],
        Progress: [0, [Validators.min(0), Validators.max(100)]],
      },
      {
        updateOn: 'blur'
      }
    )
  }

}
