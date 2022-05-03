import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    const httpEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

    return this.http.get(httpEndpoint).pipe(catchError((error) => {
      console.log(error);
      return throwError('Error yyyyy');
    }));
  }

  getData2() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer KupCDxeqy80Nfs2Ep34Q'
      })
    };
    const httpEndpoint2 = 'https://the-one-api.dev/v2/movie';

    return this.http.get(httpEndpoint2, httpOptions).pipe(catchError((error) => {
      console.log(error);
      return throwError('Error yyyyy');
    }));
  }
}


