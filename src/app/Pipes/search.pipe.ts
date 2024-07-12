import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../Interfaces/iproduct';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(searchArray:Iproduct[], searchByName:string): Iproduct[] {
    return searchArray.filter((product)=>product.title.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase()))
  }

}
