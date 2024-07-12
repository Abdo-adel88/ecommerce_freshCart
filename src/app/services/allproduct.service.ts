import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllproductService {

  constructor(private _HttpClient: HttpClient) { }

  getAllproducts():Observable<any> {
   return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products")
  }
  getProductByTd(id:string):Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getNextPage(id:number):Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${id}`)
  }
  getAllcategories():Observable<any> {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
}
