import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private _AuthService:AuthService , private _router:Router){};

  apiErrorMessage:string='';
isLoading:boolean=false;

loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-z].{5,}$/)]),
})

handelLogin(loginForm:FormGroup){
if(loginForm.valid){
  this.isLoading=true
this._AuthService.login(loginForm.value).subscribe(
  {
    next:(Response)=>{
      localStorage.setItem('token',Response.token)
      this._router.navigate(['/home'])
      this._AuthService.isLoggedInSubject.next(true)
      this.isLoading=false
    },
    error:(err)=>{console.log(err)
      this.apiErrorMessage =err.error.message
      this.isLoading=false
    },
      
    
  }
)
}
}
}
