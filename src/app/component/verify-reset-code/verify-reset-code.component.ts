import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-reset-code',
  templateUrl: './verify-reset-code.component.html',
  styleUrls: ['./verify-reset-code.component.css']
})
export class VerifyResetCodeComponent {
  isLoading: boolean = false;
  apiErrorMessage: string = ''
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  verifyResetform: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required])
  })

    
  handelVerifyReset(form: FormGroup) {
    if (form.valid) {
      this.isLoading = true
      this._AuthService.VerifyReset(form.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isLoading = false;
          this._Router.navigate(["/reset-password"])
        },
        error: (err) => {
          console.log(err);
          this.isLoading = true;
          this.apiErrorMessage = err.error.message;
        }
      })
    }
  }
}
