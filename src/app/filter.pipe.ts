import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Movie[], searchText: string, type: string): any[] {
    if (!array) return [];
    if (!searchText) return array;
    searchText = searchText.toLowerCase();
    if (type == 'title') {
      return array.filter((obj) => {
        return obj[type].toLowerCase().startsWith(searchText)
      }
      );
    } else {
      return array.filter((obj) => {
        return obj[type] == searchText;
      });
    }
  }


}
