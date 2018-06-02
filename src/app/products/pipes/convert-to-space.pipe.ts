import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(value: string, symbol: string = '='): string {
    return value.replace(symbol, ' ');
  }

}
