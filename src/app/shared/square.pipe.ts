import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarenum'
})
export class SquarePipe implements PipeTransform {

  transform(value: number) {
    return value * value;
  }

}
