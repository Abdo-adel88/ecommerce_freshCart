import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogeedUser: boolean = false;
  numOfCartItems: number = 0;
  numOfWishItems: number = 0;

  constructor(
    private _AuthService: AuthService,
    private _CartService: CartService,
    private _WishlistService: WishlistService,
    private _UserService: UserService
  ) { }

  signout() {
    this._AuthService.logOut();
  }

  userName: any;

  ngOnInit(): void {
    this._AuthService.isLoggedInSubject.subscribe((isLogged) => {
      this.isLogeedUser = isLogged;
    });

    this._UserService.userName$.subscribe(name => {
      this.userName = name;
    });

    this._CartService.cartItemsNum.subscribe({
      next: (nums) => {
        this.numOfCartItems = nums;
      }
    });

    this._WishlistService.wishItemsNum.subscribe({
      next: (nums) => {
        this.numOfWishItems = nums;
      }
    });
  }
}
