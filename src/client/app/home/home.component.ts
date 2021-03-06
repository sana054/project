import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../requests.service";
import {map} from 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';
import { CommonModule } from "@angular/common";
import {IMyDateModel, IMyDpOptions} from "mydatepicker";
import {getElementByDateService} from "../getElementByDate.service";

import {SelectItem} from 'primeng/api';
import {platform} from "os";
import {anySearchService} from "../AnySearch.service";
import {PlateformService} from "../Plateform.service";
import {KeysPipe} from './KeysPipe';
import {FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})


export class HomeComponent implements OnInit {

  platformList:string[] = [];
  platformItemList:SelectItem[];

  list:any =[];
  selectedPlatformList:any[];
  ids:any;
  response:any;
  myform: FormGroup;
req:any={
  startDate:new Date(),
  endDate:new Date()
};
  dateDebut:any;
  dateFin:any;
  res:any;
  platforms:any;
  plateformName:string="aaaa";
 // params:string[] = [];
 // spinner:boolean=false;
  booleanValue: boolean = true;
  IssueID:any;
  params=new FormControl();







  dtOptions: {};
  constructor(private _plateform: PlateformService) {}
 ngOnInit(): void {
   let a =new KeysPipe();

    this._plateform.getPlateforms().subscribe((res:any)=>{this.platforms=res;
      console.log(this.platforms);
      this.platformList=this.platforms;
      this.platformItemList=this.platformList.map((platform:any)=> {



        return {label: platform.plateformName, value: platform}


      })




    });



  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy/mm/dd',
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };












 // }
  onDateChanged(event: IMyDateModel) {
   console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
   // console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);

    this.dateDebut=event.formatted;
    console.log(this.dateDebut)

  }
  onDateChanged2(event: IMyDateModel) {
    console.log('onDateChanged2(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.dateFin=event.formatted
  }
/*getdate() {


    this._user.searchByDate(this.dateDebut,this.dateFin)
      .subscribe((res:any) => {
        this.ids = res.map((res:any) => res);
        console.log(res);
        this.response = res.map((res:any) => res.responseRequest);
        console.log(this.response);


      })

  }*/

  find(){



  }
  getemail(myForm:any) {


  console.log(myForm.form.value.inputs); }



}

