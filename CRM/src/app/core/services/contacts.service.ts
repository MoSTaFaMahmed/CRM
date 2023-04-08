import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class ContactsServices  {
 baseUrl=environment.baseUrl;
  url : String="contacts/db";
  constructor(private http: HttpClient) {
  
  }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      () => new Error('Error occured, please try again')
    )
  }
  
  getAllContacts(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${this.url}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
