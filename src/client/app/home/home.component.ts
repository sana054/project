import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../requests.service";
import {map} from 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';
import { CommonModule } from "@angular/common";
import {IMyDateModel, IMyDpOptions} from "mydatepicker";
import {getElementByDateService} from "../getElementByDate.service";


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

  ids:any;
  response:any;
  dateDebut:any;
  dateFin:any;


  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy/mm/dd',
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(private _user: getElementByDateService) {

  }


 // ngOnInit() {
  //  console.log("xxxxxx")
  //  this.rq.requests().subscribe(res=>{
  //    this.ids = res.map(res=>res);
  //    console.log(res);
   //   this.response = res.map(res=>res.responseRequest);
  //    console.log(this.response);

   // })



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
  getdate() {


    this._user.searchByDate(this.dateDebut,this.dateFin)
      .subscribe(res => {
        this.ids = res.map(res => res);
        console.log(res);
        this.response = res.map(res => res.responseRequest);
        console.log(this.response);


      })

  }



}
