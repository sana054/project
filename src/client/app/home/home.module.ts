import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import {MyDatePickerModule} from "mydatepicker";
import {DataTableModule} from 'primeng/datatable';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';

import {SelectButtonModule} from 'primeng/selectbutton';
import {KeysPipe} from './KeysPipe';
import { ReactiveFormsModule } from '@angular/forms';
import {UniqueKeys} from "./UniqueKeys";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserAnimationsModule,CalendarModule,HomeRoutingModule, SharedModule,MyDatePickerModule,DataTableModule,InputTextModule,ReactiveFormsModule,MultiSelectModule,DropdownModule,SelectButtonModule],
  declarations: [HomeComponent,KeysPipe,UniqueKeys],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule {








}
