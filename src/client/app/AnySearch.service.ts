import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class anySearchService {

  constructor(private _http: HttpClient) { }
  anySearch(IssueID: String) :any{

    return this._http.get("http://localhost:8080/search/"+IssueID)
      .map(result => result);



  }


}
