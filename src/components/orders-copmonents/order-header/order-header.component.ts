import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.sass']
})
export class OrderHeaderComponent implements OnInit {
  createOrderForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm(){
    this.createOrderForm = this.fb.group({
      OperationDescription: ["", [Validators.required]],
      StartDate: [new Date(), [Validators.required]],
      EndDate: ["", [Validators.required]],
      Progress: [0, [Validators.min(0), Validators.max(100)]],
    })
  }

}
