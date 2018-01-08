import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefilter'
})
export class PipefilterPipe implements PipeTransform {

  transform(value: any, arg1:any, arg2:any, arg3:any): any {
    let checkthis = "";
    return null;
  }

}
