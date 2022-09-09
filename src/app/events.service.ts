import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { events } from './models/events';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class eventsService {
  private REST_API_URL = 'http://localhost:4000/events';

  private HTTP_HEADER = {
    header: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getEvents(): Observable<events[]> {
    return this.http.get<events[]>(this.REST_API_URL).pipe(
      tap((newevents) => {
        console.log(`this Events = ${newevents}`);
      }),
      catchError((error) => of([]))
    );
  }

  createNewEvent(events: events): Observable<events[]> {
    return this.http.post<events[]>(this.REST_API_URL, this.HTTP_HEADER).pipe(
      tap((newevents) => {
        console.log(`this Events = ${newevents}`);
      }),
      catchError((error) => of([]))
    );
  }

  geteventbyId(id:string): Observable<events | any> {
    return this.http.get<events>(`${this.REST_API_URL}/find/${id}`).pipe(
      tap((newevents) => {
        console.log(`this Events = ${newevents}`);
      }),
      catchError((error) => of([]))
    );
  }

  updateEvent(id: String, events: object): Observable<events[]> {
    return this.http.put<events[]>(`${this.REST_API_URL}/update/${id}`,events).pipe(
      tap((updateEvents) => {
        console.log(`this Events = ${updateEvents}`);
      }),
      catchError((error) => of())
    )
  }

  deleteEvent(id: String) {
    return this.http.delete<events[]>(`${this.REST_API_URL}/delete/${id}`).pipe(
      tap((deleteEvents) => {
        console.log(`delete event = ${deleteEvents}`);
      }),
      catchError((error) => of( new events()))
    )
  }
}
