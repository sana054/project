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
  ids:any;
  response:any;
  correlationID :String;
  selectedOne:any;



constructor(private _user: searchByUserNameService)
{

}

getResult() {
  this._user.searchByUserName(this.correlationID,this.userName)
    .subscribe((res:any[]) => {
      this.ids = res.map(res => res);
      console.log(res);
      this.response = res.map(res => res.responseRequest);
      console.log(this.response);
      console.log(this.userName);

    })

}


  }






