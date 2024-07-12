import { Component } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

  constructor(private _BrandsService:BrandsService){}
  isLoading:boolean=true;

  allCategories:any;
  ngOnInit(): void {
    this.isLoading=true
    this._BrandsService.getAllBrands().subscribe({
      next:(response)=>{;
        this.allCategories=response.data
        this.isLoading=false
      }
    })
  }
}
