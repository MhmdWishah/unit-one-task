import { BehaviorSubject, Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Location, OrderDetail } from 'src/models/orders.modal';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.sass']
})
export class OrderDetailComponent implements OnInit {

  @Input() detailsList: BehaviorSubject<OrderDetail[]|undefined> = new BehaviorSubject<OrderDetail[]|undefined>([]);
  @Output() detailsListChange = new EventEmitter<BehaviorSubject<OrderDetail[]|undefined>>();

  get detailsList$(): Observable<OrderDetail[]|undefined>{
    return this.detailsList.asObservable();
  }

  submitted: boolean = false;
  locations: Location[] = [
    {
      LocationCode: 1,
      LocationName: "Location 1"
    },
    {
      LocationCode: 2,
      LocationName: "Location 2"
    },
    {
      LocationCode: 3,
      LocationName: "Location 3"
    },
  ]
  orderDetailForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm(){
    this.orderDetailForm = this.fb.group({
      Description: ["", [Validators.required]],
      LocationCode: ["", [Validators.required, Validators.min(0),]],
      Progress: [0, [Validators.min(0), Validators.max(100)]],
    })
  }

  addDetail(){
    this.submitted = true;
    if(this.orderDetailForm.valid){
      const list = this.detailsList.getValue();
      list?.push({
        ...this.orderDetailForm.value,
        LocationName: this.locations.find(
          location => this.orderDetailForm?.value?.LocationCode == location?.LocationCode
        )?.LocationName
      });
      console.log("list:",list)
      this.detailsList.next(list);
      this.clearForm();
    }
  }

  get formControls(){
    return this.orderDetailForm.controls;
  }

  clearForm(){
    this.orderDetailForm.reset();
    this.submitted = false;
  }

  removeDetailHandle(index: number){
    const filteredList = this.detailsList.getValue()?.filter((ele: OrderDetail, i: number) => i !== index);
    this.detailsList.next([...filteredList!]);
  }
}
