import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrdersComponentsModule } from 'src/components/orders-copmonents/orders-copmonents.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: OrdersComponent
    }]),
    FormsModule,
    ReactiveFormsModule,
    OrdersComponentsModule,
    MatExpansionModule,
    CdkAccordionModule,
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule { }
