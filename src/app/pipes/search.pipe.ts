import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../models/item.model';
import {NgxTrimDirectiveModule} from 'ngx-trim-directive';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Item[], search: ''): Item[] {
    if (items.length === 0 || search === '') {
      return items;
    }
    return items.filter((item) => item.title === search);

  }

}
