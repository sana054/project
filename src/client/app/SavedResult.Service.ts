import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {SavedResult} from "./domain/SavedResult";
import {catchError} from "rxjs/operators";



@Injectable()
export class SavedResultService {

  constructor(private _http: HttpClient) { }
  savedResult(save: SavedResult) {
    console.log(save);

    return   this._http.post("http://localhost:8080/saveResult",save);

  }

}
