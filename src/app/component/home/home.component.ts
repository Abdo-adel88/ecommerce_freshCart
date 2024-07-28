import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/iproduct';
import { AllproductService } from 'src/app/services/allproduct.service';
import { PageEvent } from 'src/app/Interfaces/page-event';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {





  PageEvent?: PageEvent
  first: number = 1;

  rows: number = 2;

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }


  getpage(page: any) {
    this.isLoading = true;
    if (page == 0) {
      this._AllproductService.getNextPage(1).subscribe((res) => {
        this.allProduct = res.data


        this.isLoading = false;
      })
    }
    else {
      this._AllproductService.getNextPage(page + 1).subscribe((res) => {
        this.allProduct = res.data

        this.isLoading = false;
      })
    }


  }




  constructor(private _AllproductService: AllproductService,) { }

  allProduct: Iproduct[] = [];
  isLoading: boolean = true;


  searchItems: string = ''


  ngOnInit(): void {
    this.isLoading = true;

    this._AllproductService.getAllproducts().subscribe({
      next: (response) => {

        this.allProduct = response.data;

        this.isLoading = false;
      },
      error: (err) => { console.log(err); }
    })
  }

}
