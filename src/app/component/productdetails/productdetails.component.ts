import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Iproduct } from 'src/app/Interfaces/iproduct';
import { AllproductService } from 'src/app/services/allproduct.service';
import { CartService } from 'src/app/services/cart.service';
import { WishListComponent } from '../wish-list/wish-list.component';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  isLoading:boolean=true;


  

  
  addToCart(id: any) {
    this.isLoading=true;

    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        
        this._CartService.cartItemsNum.next(response.numOfCartItems)
        this.isLoading=false;
        this.toastr.success("Success Add To Cart 🛺")
      },
      error: (err) => {
        console.log(err);
      }
    })
  }




  constructor(private _ActivatedRoute: ActivatedRoute, private _AllproductService: AllproductService ,private _CartService: CartService ,private toastr: ToastrService , private _WishlistService:WishlistService) { }
  productId: string | null = null;
  productDetails?:Iproduct;
  ngOnInit(): void {
    this.isLoading=true;

    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
      
        this.productId = params.get('id')
        this.isLoading=false;

      }
    })
    if(this.productId!=null){
      this.isLoading=true;

      this._AllproductService.getProductByTd(this.productId).subscribe({
        next:(response)=>{
          this.productDetails=response.data
          this.isLoading=false;

        }
      })
    }



    this._WishlistService.wishListProductId.subscribe((idsList) => { this.wishListProductsId = idsList })

    
  }


  addTowish(id: any) {


    // this.changeColor=false;
    // console.log(this.changeColor)

    this._WishlistService.addToWishList(id).subscribe({
      next: (response) => {

        response.data.find((x: any) => {
          if (x.id == id) {
            console.log(x.id);
            console.log(id);
            console.log(x.id == id);


            
          } 
        }
        );

        this._WishlistService.wishItemsNum.next(response.data.length)
        this.toastr.success("Success Add To Wish List ❤️")
        this._WishlistService.wishListProductId.next(response.data)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  wishListProductsId: string[] = []

  isWishListProduct(id: string) {
    return this.wishListProductsId.includes(id)
  }

}
