import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class PlateformService {

  constructor(private _http: HttpClient) { }
  getPlateforms() :any{

    return this._http.get("http://localhost:8080/plateforms")
      .map(result => result);



  }


}
