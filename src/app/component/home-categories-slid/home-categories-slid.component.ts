import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Icategory } from 'src/app/Interfaces/icategory';
import { AllproductService } from 'src/app/services/allproduct.service';

@Component({
  selector: 'app-home-categories-slid',
  templateUrl: './home-categories-slid.component.html',
  styleUrls: ['./home-categories-slid.component.css']
})
export class HomeCategoriesSlidComponent implements OnInit{
constructor(private _AllproductService:AllproductService){}
allCategories:Icategory[]=[]

ngOnInit(): void {
  this._AllproductService.getAllcategories().subscribe({
    next:(response)=>{;
      this.allCategories=response.data;
    }
  })
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:3000,
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
      items: 4
    },
    940: {
      items: 7
    }
  },
  nav: false
}
}
