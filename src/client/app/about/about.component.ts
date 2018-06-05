import { Component } from '@angular/core';
import {IMyDateModel, IMyDpOptions} from "mydatepicker";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {searchByUserNameService} from "../searchByUserName.service";
import {SavedResultService} from "../SavedResult.Service";
import {Result} from "../domain/result";
import {SavedResult} from "../domain/SavedResult";


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
  issueID:String;
  ids:any= [];
  requests:any= [];
  responses:any= [];
  response:any= [];
  correlationID :String;
  selectedOne:any;
  msgs: any[] = [];
  //request:any= [];
  cols: any[];
  etat:boolean=false;


   list:any =[];
  save=new SavedResult();



constructor(private _user: searchByUserNameService, private _save:SavedResultService)
{


}
  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'IDRequest' },
      { field: 'RequestTime', header: 'RequestTime' },

    ];


  }

getResult() {

  this._user.searchByUserName(this.correlationID,this.userName)

    .subscribe(res => {
      this.spinner=true;
      this.ids=res;
    // this. etat=true;
      console.log(res);
      this.spinner=false;
    })


}
saveResult() {



  for (let r of this.selectedOne){
    let re=new Result();

    re.requestIndex=r.request.requestIndex
    re.requestFilePath=r.request.requestFilePath
    re.responseIndex=r.response.responseIndex
    re.responseFilePath=r.response.responseFilePath
     this.list.push(re);
      console .log (this.list);
  }
 this. save.issueID=this.issueID;
  this.save.results=this.list;
  this._save.savedResult(this.save).subscribe(res=>{
    console.log(res)
  },err=>{
    console.log(err)
  });
  console.log('saved');

  this.msgs.push({severity:'success', summary:'success Message', detail:'Data Saved with success!'});

}


  }







