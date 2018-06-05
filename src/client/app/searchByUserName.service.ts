import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class searchByUserNameService {

  constructor(private _http: HttpClient) { }
  searchByUserName(CorrelationId: String,UserName:String) {
    return   this._http.get("http://localhost:8080/recherche?CorrelationId="+CorrelationId+"&UserName="+UserName).map(res => res);





  }


}
