import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringObscure'
})
export class StringObscurePipe implements PipeTransform {

  transform(input: string, startAt: number, endAt: number, show: boolean): string {
    if (!!show) {
      return input;
    }
    const len = input.length;
    const  rp = 'x';
    if (len < startAt) {
      return input;
    }
    if (len < endAt) {
      endAt = 0;
    } else if (len - endAt <= startAt) {
      endAt = 0;
    }
    const trimTxt = input.substring(startAt, len - endAt);
    const repTxt = rp.repeat(trimTxt.length);
    const newInput = input.replace(trimTxt, repTxt);
    return newInput;
  }

}
