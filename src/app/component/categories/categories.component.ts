import { Component,  OnInit } from '@angular/core';
import { CategroiesService } from 'src/app/services/categroies.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  constructor(private _CategroiesService:CategroiesService, ){}
  isLoading:boolean=true;
  allCategories:any;

  ngOnInit(): void {
    this.isLoading=true;
    this._CategroiesService.getAllCategories().subscribe({
      next:(response)=>{;
        this.allCategories=response.data
        this.isLoading=false;
      }
    })
  }
}
