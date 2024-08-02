import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/iproduct';
import { AllproductService } from 'src/app/services/allproduct.service';
import { PageEvent } from 'src/app/Interfaces/page-event';

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
  homeTop():any{
    window.scrollTo(0,0);
  }


  PageEvent?: PageEvent
  first: number = 1;

  rows: number = 2;

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
    window.scrollTo(0, 0);

    // Fetch new page data
  }


  getpage(page: any) {
    this.isLoading = true;
    if (page == 0) {
      this._AllproductService.getNextPage(1).subscribe((res) => {
        this.allProduct = res.data


        this.isLoading = false;
        window.scrollTo(0,0);
      })
    }
    else {
      this._AllproductService.getNextPage(page + 1).subscribe((res) => {
        this.allProduct = res.data

        this.isLoading = false;
        window.scrollTo(0,0);
      })
    }


  }



}
