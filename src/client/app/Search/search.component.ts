import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../requests.service";
import {map} from 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';
import { CommonModule } from "@angular/common";
import {IMyDateModel, IMyDpOptions} from "mydatepicker";
import {getElementByDateService} from "../getElementByDate.service";
import {anySearchService} from "../AnySearch.service";
import {ProgressSpinnerModule} from 'primeng/progressspinner';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchComponent implements OnInit {

  userName :String;
  ids:any;
  response:any;



  constructor(private _user: anySearchService) {

  }


 //ngOnInit() {


  // })




  find() {
    this._user.anySearch(this.userName)
      .subscribe(res => {
        this.ids = res.map(res => res);
        console.log(res);
        this.response = res.map(res => res.responseRequest);
        console.log(this.response);
        console.log(this.userName);


      })

  }




}
