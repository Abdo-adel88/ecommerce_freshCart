import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/iproduct';
import { AllproductService } from 'src/app/services/allproduct.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

  constructor(private _AllproductService: AllproductService) { }

  allProduct: Iproduct[]=[];
  isLoading:boolean=true;


  searchItems:string=''
  ngOnInit(): void {
   this.isLoading=true;

    this._AllproductService.getAllproducts().subscribe({
      next: (response) => {
       
        this.allProduct = response.data;
        this.isLoading=false;
      },
      
    })
  }

}
