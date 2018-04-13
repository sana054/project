import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../requests.service";
import {map} from 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';
import { CommonModule } from "@angular/common";

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



  constructor(public rq: RequestsService) {}


  ngOnInit() {
    console.log("xxxxxx")
    this.rq.requests().subscribe(res=>{
      this.ids = res.map(res=>res);
      console.log(res);
      this.response = res.map(res=>res.responseRequest);
      console.log(this.response);

    })



  }



}
