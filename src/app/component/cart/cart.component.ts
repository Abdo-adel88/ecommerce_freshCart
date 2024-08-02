import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _CartService: CartService, private toastr: ToastrService) { }

  detailsCart: any;

  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = true;
    this._CartService.getUserCart().subscribe({
      next: (response) => {
       
        this.detailsCart = response.data
        this._CartService.cartItemsNum.next(response.numOfCartItems)

        this.isLoading = false;

      },
      error:()=>{
        this.isLoading = false;
      }
    })
   
    // 

  }


  removeItemCart(id: string) {
    this.isLoading = true;
    this._CartService.removeToCart(id).subscribe({
      next: (response) => {
        this.detailsCart = response.data
        this._CartService.cartItemsNum.next(response.numOfCartItems)
        this.isLoading = false;

        this.toastr.error("Items have been deleted successfully ")
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  removeAllCart() {
    this.isLoading = true;
    this._CartService.removeAllCart().subscribe({
      next: (response) => {

        this.detailsCart = response.data
        this._CartService.cartItemsNum.next(response.numOfCartItems)
        this.isLoading = false;
        this.toastr.error("All Items have been deleted successfully ")
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateCartNumber(id: string, count: number) {
    this.isLoading = true;
    this._CartService.updateCartNumber(id, count).subscribe({
      next: (response) => {
        this.detailsCart = response.data
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
