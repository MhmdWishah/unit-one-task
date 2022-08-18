import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.sass']
})
export class OrderHeaderComponent implements OnInit {
  @Input() headerOrderForm!: FormGroup;
  @Output() headerOrderFormChange = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder,public cdr: ChangeDetectorRef,) {
    // this.initForm();
  }

  ngOnInit() {
    this.headerOrderForm.valueChanges.subscribe(
      value => {
        this.headerOrderFormChange.emit(this.headerOrderForm);
      }
    );
  }

  initForm(){
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

  get formControls(){
    return this.headerOrderForm?.controls;
  }

}
