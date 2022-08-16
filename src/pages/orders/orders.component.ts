import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {
  createOrderForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

}
