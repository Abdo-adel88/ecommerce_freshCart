import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
constructor(private _AuthService:AuthService, private _Router:Router){}
  
  isLoading :boolean=false
  apiErrorMessage:string=''
  resetPassword:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-z].{5,}$/)])
  })

  handelResetPassword(form:FormGroup){
    if (form.valid) {
      this.isLoading = true
      this._AuthService.resetPassword(form.value).subscribe({
        next:(response)=>{console.log(response);
          this._Router.navigate(['/login'])
          this.isLoading = false
        },
        error:(err)=>{console.log(err);
          this.apiErrorMessage=err.error.message
          this.isLoading = false
        }
      })
    }
  }
}
