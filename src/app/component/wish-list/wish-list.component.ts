import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private _WishlistService: WishlistService, private _CartService: CartService) { }
  
  isLoading: boolean = true

  detailsCart: any;
  ngOnInit(): void {
    this.isLoading = true;
    this.getWishList()

  }
  getWishList() {
    this._WishlistService.getUserWish().subscribe({
      next: (response) => {
       
 
        this.detailsCart = response.data
        this.isLoading = false;


      },
      error: (err) => { console.log(err); }
    })
  }

  removeToWishList(id: string) {
    this.isLoading = true;
    this._WishlistService.removeTooWishList(id).subscribe({
      next: (response) => {
        this._WishlistService.wishItemsNum.next(response.data.length)
        this.detailsCart = response.data
        this.isLoading = false;
       
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.getWishList()

  }




  addToCart(id: string) {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
       
        this._CartService.cartItemsNum.next(response.numOfCartItems)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
