import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/iproduct';
import { AllproductService } from 'src/app/services/allproduct.service';
import { PageEvent } from 'src/app/Interfaces/page-event';
import { UserService } from 'src/app/services/user.service';
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
    window.scrollTo(0, 0);

    // Fetch new page data
  }


  homeTop():any{
    window.scrollTo(0,0);
  }

  getpage(page: any) {
    this.isLoading = true;
    if (page == 0) {
      this._AllproductService.getNextPage(1).subscribe((res) => {
        this.allProduct = res.data


        this.isLoading = false;
        window.scrollTo(0, 810);
      })
    }
    else {
      this._AllproductService.getNextPage(page + 1).subscribe((res) => {
        this.allProduct = res.data

        this.isLoading = false;
        window.scrollTo(0, 810);
      })
    }


  }

  userName: any;


  constructor(private _AllproductService: AllproductService,  private _UserService: UserService) { }

  allProduct: Iproduct[] = [];
  isLoading: boolean = true;


  searchItems: string = ''


  ngOnInit(): void {
    this.isLoading = true;

    this._UserService.userName$.subscribe(name => {
      this.userName = name;
    });


    this._AllproductService.getAllproducts().subscribe({
      next: (response) => {

        this.allProduct = response.data;

        this.isLoading = false;
      },
      error: (err) => { console.log(err); }
    })
  }

}
