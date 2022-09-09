import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { user } from './models/user';
import { catchError, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = environment.API_URL+'/user';

  private HTTP_HEADER = {
    header: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getUser(): Observable<user[]> {
    return this.http.get<user[]>(this.REST_API_URL).pipe(
      tap((newuser) => {
        console.log(`this User = ${newuser}`);
      }),
      catchError((error) => of([]))
    );
  }

  createNewUser(user: user): Observable<user[]> {
    return this.http.post<user[]>(this.REST_API_URL, this.HTTP_HEADER).pipe(
      tap((newuser) => {
        console.log(`this user = ${newuser}`);
      }),
      catchError((error) => of([]))
    );
  }

  getusertbyId(id:string): Observable<user[]> {
    return this.http.post<user[]>(`${this.REST_API_URL}/id`, this.HTTP_HEADER).pipe(
      tap((newuser) => {
        console.log(`this Events = ${newuser}`);
      }),
      catchError((error) => of([]))
    );
  }

  updateUser(id: String, user: object): Observable<user[]> {
    return this.http.put<user[]>(`${this.REST_API_URL}/update/${id}`,user).pipe(
      tap((updateUser) => {
        console.log(`this Events = ${updateUser}`);
      }),
      catchError((error) => of())
    )
  }

  deleteUser(id: String) {
    return this.http.delete<user[]>(`${this.REST_API_URL}/delete/${id}`).pipe(
      tap((deleteUser) => {
        console.log(`delete event = ${deleteUser}`);
      }),
      catchError((error) => of( new user()))
    )
  }
}

