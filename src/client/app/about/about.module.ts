import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import {IMyDpOptions, MyDatePickerModule} from 'mydatepicker';
import {FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";

@NgModule({
  imports: [CommonModule, AboutRoutingModule, MyDatePickerModule,FormsModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      // Empty string or null means no initial value. Can be also specific date for
      // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
      // value.

      myDate: [null, Validators.required]
      // other controls are here...
    });
  }

  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.myForm.patchValue({
      myDate: {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }
      }
    });
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.myForm.patchValue({myDate: null});
  }
}

