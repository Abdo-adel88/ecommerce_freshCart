import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _router: Router,
    private _CartService: CartService,
    private _WishlistService: WishlistService,
    private _UserService: UserService
  ) { }

  apiErrorMessage: string = '';
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-z].{5,}$/)]),
  })

  userName: any;

  handelLogin(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.isLoading = true;
      this._AuthService.login(loginForm.value).subscribe(
        {
          next: (Response) => {
            localStorage.setItem('token', Response.token);
            this._CartService.updateCartItemsCount();
            this._WishlistService.updateWishListItemsCount();
            this._router.navigate(['/home']);
            this._AuthService.isLoggedInSubject.next(true);
            this.isLoading = false;
            console.log(Response.user.name);
            this.userName = Response.user.name;
            this._UserService.setUserName(this.userName);  // Set the userName in the UserService
          },
          error: (err) => {
            console.log(err);
            this.apiErrorMessage = err.error.message;
            this.isLoading = false;
          },
        }
      )
    }
  }
}
