import { UserType } from './../../models/global.model';
import { Observable } from 'rxjs';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {
  createOrderForm!: FormGroup;

  userType$: Observable<UserType|undefined>;
  constructor(private globalService: GlobalService) {
    this.userType$ = globalService.userType$;
  }

  ngOnInit() {
  }

}
