import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class getElementByDateService {

  constructor(private _http: HttpClient) { }
  searchByDate(dateDebut: Date,dateFin:Date) :any{

    return this._http.get("http://localhost:8080/requests?dateDebut="+dateDebut+"&dateFin="+dateFin)
      .map(result => result);



  }


}
