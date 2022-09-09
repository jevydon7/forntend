import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
   constructor(private auth:AuthService, private route:Router) {}
    
   canActivate(): boolean{
     if(this.auth.islogged()) {
      return true;
     }else{
      console.log('Not logged in')
      this.route.navigate(['/login']);
      return false
     }
     

   }

} 


