import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import {  user } from './models/user';
import { catchError,map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REST_API_URL = 'http://localhost:4000/auth'

  constructor(private auth:HttpClient) { }
  islogged(){
    return !!localStorage.getItem('token')
  }

  loginUser(data:object):Observable<user>{
    return this.auth.post<user>(`${this.REST_API_URL}`,data).pipe(
      tap ( userloggedIn => console.log(`logged In`)),
      catchError(error => of ())
    );
  }

}
