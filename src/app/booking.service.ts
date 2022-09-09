import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { booking} from './models/booking';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private REST_API_URL = 'http://localhost:4000/bookService';

  private HTTP_HEADER = {
    header: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private http: HttpClient){ }
  getBooking(): Observable<booking[]> {
    return this.http.get<booking[]>(this.REST_API_URL).pipe(
      tap((newbooking) => {
        console.log(`this booked = ${newbooking}`);
      }),
      catchError((error) => of([]))
    );
  }

  createNewBooking(booking:object):Observable<booking> {
    return this.http.post<booking>(`${this.REST_API_URL}/create`, booking).pipe(
      tap(newbooking => console.log(`this booking = ${newbooking}`)),
      catchError(error => of())
    );
  }

  getbookingbyId(id: string): Observable<booking |any > {
    return this.http.get<booking>(`${this.REST_API_URL}/find/${id}`).pipe(
      tap((newbooking) => {
        console.log(`this booking = ${newbooking}`);
      }),
      catchError((error) => of([]))
    );
  }

  updateBooking(id: String, data: object): Observable<booking[]> {
    return this.http.put<booking[]>(`${this.REST_API_URL}/update/${id}`,data).pipe(
      tap((updateBooking) => {
        console.log(`this booked = ${updateBooking}`);
      }),
      catchError((error) => of())
    )
  }

  deleteBooking(id: String) {
    return this.http.delete<booking[]>(`${this.REST_API_URL}/delete/${id}`).pipe(
      tap((deleteBooking) => {
        console.log(`delete booking = ${deleteBooking}`);
      }),
      catchError((error) => of( new booking()))
    )
  }
}
