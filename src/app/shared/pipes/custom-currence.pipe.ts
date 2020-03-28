import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencePipe implements PipeTransform {

  transform(value: any, icon: string = '/=', start: boolean = false): string {
    let nValue: number;
    if (isNaN(value)) {
      nValue = 0;
    } else {
      nValue = value;
    }

    let output = nValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    if (start) {
      output = icon  + output;
    } else {
      output += icon;
    }
    return output;
  }

}
