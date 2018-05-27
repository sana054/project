import { Component } from '@angular/core';
import {IMyDateModel, IMyDpOptions} from "mydatepicker";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {searchByUserNameService} from "../searchByUserName.service";


/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})

export class AboutComponent {
  userName :String;
  ids:any= [];
  requests:any= [];
  responses:any= [];
  response:any= [];
  correlationID :String;
  selectedOne:any;
  request:any= [];
  cols: any[];

constructor(private _user: searchByUserNameService)
{

}
  ngOnInit() {


    this.cols = [
      { field: 'Status', header: 'Status' },
      { field: '@Timestamp', header: '@Timestamp' }

    ];
  }

getResult() {
  this._user.searchByUserName(this.correlationID,this.userName)
    .subscribe(res => {
      console.log(res);
      for (var i=0;i<res.length;i++){
      this.ids =res[i];

      console.log(this.ids);
      this.request = this.ids.request;
      this.requests.push(this.request);
      this.response = this.ids.response;
      this.responses.push( this.response);
      console.log(this.responses[0]);
      console.log(this.requests);
      }
      console.log(this.userName)
    })

}


  }






