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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RequiredValidationFeedbackModule } from '../required-validation-feedback/required-validation-feedback.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';


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
    MatMomentDateModule,
    MatButtonModule,
    MatIconModule,
    RequiredValidationFeedbackModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  exports: [ordersComponents],
  declarations: [ordersComponents],
  providers: [],
})
export class OrdersComponentsModule { }
