import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandsService } from 'src/app/services/brands.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-detailsbrand',
  templateUrl: './detailsbrand.component.html',
  styleUrls: ['./detailsbrand.component.css']
})
export class DetailsbrandComponent implements OnInit{

  isLoading: boolean = true;

  constructor(private _ActivatedRoute: ActivatedRoute, private _BrandsService: BrandsService ,private _CartService:CartService,private toastr: ToastrService, private _WishlistService:WishlistService) { }
  productId: string | null = null;
  productDetails:any ;
 
  
  ngOnInit(): void {
    this.isLoading = true;
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {

        this.productId = params.get('id')
        this.isLoading = false;



      }
    })
    if (this.productId != null) {
      this.isLoading = true;

      this._BrandsService.getspecificBrand(this.productId).subscribe({
        next: (response) => {
         

          this.productDetails = response.data
          this.isLoading = false;

        }
      })


    }

  }



 
}
