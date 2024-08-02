import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from 'src/app/Interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Iproduct
  constructor(private _CartService: CartService, private _WishlistService: WishlistService, private toastr: ToastrService) { }

  isLoading:boolean=false;

  addToCart(id: string) {
    this.isLoading=true
    this._CartService.addToCart(id).subscribe({
      next: (response) => {

        this._CartService.cartItemsNum.next(response.numOfCartItems)
        this.toastr.success("Success Add To Cart 🛺")
        this.isLoading=false
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  changeColor: boolean = false;

  addTowish(id: string) {


    // this.changeColor=false;
    // console.log(this.changeColor)

    this._WishlistService.addToWishList(id).subscribe({
      next: (response) => {

        response.data.find((x: any) => {
          if (x.id == id) {
            console.log(x.id);
            console.log(id);
            console.log(x.id == id);


            this.changeColor = true;
          } else {
            this.changeColor = false;

          }
        }
        );

        this._WishlistService.wishItemsNum.next(response.data.length)
        this.changeColor = true;
        this.toastr.success("Success Add To Wish List ❤️")
        this._WishlistService.wishListProductId.next(response.data)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  wishListProductsId: string[] = []

  ngOnInit(): void {
    this._WishlistService.wishListProductId.subscribe((idsList) => { this.wishListProductsId = idsList })
  }

  isWishListProduct(id: string) {
    return this.wishListProductsId.includes(id)
  }



}
