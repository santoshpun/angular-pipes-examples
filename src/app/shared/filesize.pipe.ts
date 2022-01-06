import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizePipe'
})
export class FilesizePipe implements PipeTransform {

  transform(size: number, extension: string = 'MB'): any {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }

}