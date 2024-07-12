import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatch } from 'src/app/custoum validation/match-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

apiErrorMessage:string='';

  constructor(private _AuthService:AuthService , private _Router:Router ) { }

registerForm:FormGroup =new FormGroup({
  name:new FormControl(null ,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email:new FormControl(null ,[Validators.required,Validators.email]),
  password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-z].{5,}$/)]),
  rePassword:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-z].{5,}$/)]),
  phone:new FormControl(null ,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
},{validators:passwordMatch});


isLoading:boolean=false;

handleRegister(regForm:FormGroup){


  if(this.registerForm.valid){
  this.isLoading=true 
    this._AuthService.register(regForm.value).subscribe({
      next:()=>{
        this._Router.navigate(['/login'])
        this.isLoading=false
      },
      error:(err)=>{
        this.apiErrorMessage=err.error.message
        this.isLoading=false
      },
      }
    )
    
  }

}
}
