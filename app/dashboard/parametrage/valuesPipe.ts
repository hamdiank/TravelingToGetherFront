import { Injectable, Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'values',  pure: false })
@Injectable()
export class ValuesPipe implements PipeTransform {
    
 transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key]});
    }
    return keys;
  }
}