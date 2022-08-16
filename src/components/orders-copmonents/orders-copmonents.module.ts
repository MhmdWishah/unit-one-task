import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ordersComponents } from '.';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NativeDateModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(ordersComponentsRoutings),
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatDatepickerModule,
    NativeDateModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  exports: [ordersComponents],
  declarations: [ordersComponents],
  providers: [],
})
export class OrdersComponentsModule { }
