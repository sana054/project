import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class RequestsService {

  constructor(private _http: HttpClient) { }
  requests() :any{

    return this._http.get("http://localhost:8080/requests")
      .map(result => result);



  }


}
