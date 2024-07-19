import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {



  wishListProductId=new BehaviorSubject<string[]>([])

  wishItemsNum = new BehaviorSubject<number>(0)
  constructor(private _HttpClient: HttpClient) {
  this.updateWishListItemsCount()
  }

  updateWishListItemsCount(){
    this.getUserWish().subscribe({
      next: (response) => {
        
        this.wishItemsNum.next(response.count) 
        this.wishListProductId.next((response.data as Iproduct[]).map((product)=>product._id))
      },

      error:(err)=>{
        if(err.status == 404){
          this.wishItemsNum.next(0)
        }
      }
    
    })
    
  }

  getUserWish(): Observable<any> {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist",)
  }

  addToWishList(id: string): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        "productId": id
      },

    )
  }
 
  removeTooWishList(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,

    )
  }

}
