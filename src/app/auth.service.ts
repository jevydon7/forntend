import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import {  user } from './models/user';
import { catchError,map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REST_API_URL = environment.API_URL+'/auth'

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
