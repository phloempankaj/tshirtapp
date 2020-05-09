import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: IProduct[], args: number): unknown {
    if(!args){
      return value;
    }
    return value.filter(item => item.price>args);
  }

}
