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
  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'IDRequest' },
      { field: 'RequestTime', header: 'RequestTime' },

    ];
  }

  IssueID :String;
  ids:any;
  response:any;
  cols: any[];



  constructor(private _user: anySearchService) {

  }


 //ngOnInit() {


  // })




  find() {
    this._user.anySearch(this.IssueID)
      .subscribe(res => {

        this.ids=res;
        // this. etat=true;
        console.log(res);

      })
  }




}
