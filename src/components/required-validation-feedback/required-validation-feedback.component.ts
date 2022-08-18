import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-required-validation-feedback',
  templateUrl: 'required-validation-feedback.component.html'
})

export class RequiredValidationFeedbackComponent implements OnInit {
  @Input() control!: AbstractControl;
  @Input() submitted!: boolean;
  constructor() { }

  ngOnInit() { }
}
