import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import {MyDatePickerModule} from "mydatepicker";

@NgModule({
  imports: [SearchRoutingModule, SharedModule,MyDatePickerModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [NameListService]
})
export class SearchModule { }
