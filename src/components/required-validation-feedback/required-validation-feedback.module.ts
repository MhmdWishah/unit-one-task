import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RequiredValidationFeedbackComponent } from './required-validation-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    RequiredValidationFeedbackComponent
  ],
  declarations: [RequiredValidationFeedbackComponent],
  providers: [],
})
export class RequiredValidationFeedbackModule { }
