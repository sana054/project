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

 ngOnInit(): void {
    this.platformItemList=this.platformList.map((platform:any)=> {
      return {label: platform.plateformName, value: platform}
    });
  }
  platformItemList:SelectItem[];
  platformList=[
    {
      "id": 1,
      "params": {
        "1": "correlation",
        "2": "requestID"
      },
      "plateformName": "PF"
    },
    {
      "id": 2,
      "params": {
        "3": "UserName"
      },
      "plateformName": "PF2"
    }
  ];


  selectedPlatformList:any[];
  ids:any;
  response:any;


  dateDebut:any;
  dateFin:any;
  res:any;
  plateformName:string="aaaa";
      params:string[] = [];
  platformListt:string[] = [];

  selectedCars1: string;
  public shown = false;

 // selectedCars2: string[] = [];


  dtOptions: {};
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy/mm/dd',
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(private _plateform: PlateformService) {





  }










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
 /* getdate() {


    this._user.searchByDate(this.dateDebut,this.dateFin)
      .subscribe((res:any) => {
        this.ids = res.map((res:any) => res);
        console.log(res);
        this.response = res.map((res:any) => res.responseRequest);
        console.log(this.response);


      })

  }*/
  /*getPlateform(){
    this._plateform.getPlateforms().subscribe((res:any) => {
      this. platformItemList = res.map((platform:any)=> {
        return {label: platform.plateformName, value: platform}

      })

    });



  }*/




}
