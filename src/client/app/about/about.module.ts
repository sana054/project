import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import {IMyDpOptions, MyDatePickerModule} from 'mydatepicker';
import {FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";
import {DataTableModule} from 'primeng/datatable';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [CommonModule, AboutRoutingModule, MyDatePickerModule,FormsModule,DataTableModule,TableModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule  {

}

