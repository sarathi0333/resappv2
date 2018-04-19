import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { PostMessage } from './../models/message';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NetworkService {

  constructor(private http: HttpClient) { }

  postMsg(message: PostMessage): Observable<PostMessage> {
    console.log("service called")
    return this.http.post<PostMessage>(message.url, message, httpOptions).pipe(
      tap(response => { return response }),
      catchError(this.handleError<PostMessage>('addmessage'))
    );
  }

  /**
   * Handle http operations that failed
   * 
   * **/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
