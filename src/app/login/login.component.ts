import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: user;

  constructor(private auth:AuthService, private route:Router,) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
     email: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required),
  })

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onSubmit(body:object):void{
      this.auth.loginUser(body).subscribe({
         next: (res: any) => {
          if(res && res['token']){
            localStorage.setItem('token',res.token);
            this.route.navigate(['/admin'])
          }else{
            alert('Invalid Credentials')
          }
         },
         error: (err) => {
           console.log(err)
         }
      })
  }

}
