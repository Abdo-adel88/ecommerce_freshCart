import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsNum = new BehaviorSubject<number>(0)
  
  constructor(private _HttpClient: HttpClient) {
    this.getUserCart().subscribe({
      next: (response) => {
       
        this.cartItemsNum.next(response.numOfCartItems) 
      },
     
    })
  }

 

  addToCart(id: string): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart/",
      {
        "productId": id
      },

    )
  }
  getUserCart(): Observable<any> {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart/",

    )
  }
  removeToCart(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

    )
  }
  removeAllCart(): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/`,


    )
  }
  updateCartNumber(id: string, count: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count: count },


    )
  }

  onlinePayment(cartId: any, shappingAddress: number): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,

      { shappingAddress: shappingAddress },


    )
  }

}