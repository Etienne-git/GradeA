import { Pipe, PipeTransform } from '@angular/core';
import{ Media } from '../media'

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: Media[], searchText: string): Media[] {
    if (!items || !searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();

    // @ts-ignore
    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
