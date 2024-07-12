import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { CategroiesService } from 'src/app/services/categroies.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-details-categroies',
  templateUrl: './details-categroies.component.html',
  styleUrls: ['./details-categroies.component.css']
})
export class DetailsCategroiesComponent implements OnInit {


  isLoading: boolean = true;

  constructor(private _ActivatedRoute: ActivatedRoute, private _CategroiesService: CategroiesService ,private _CartService:CartService,private toastr: ToastrService, private _WishlistService:WishlistService) { }
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
    
          this._CategroiesService.getspecificCategories(this.productId).subscribe({
            next: (response) => {
              
    
              this.productDetails = response.data
              this.isLoading = false;
    
            }
          })
    
    
        }
    
  }



}
