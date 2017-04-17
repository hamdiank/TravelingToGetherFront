import { Injectable, Pipe } from '@angular/core';
@Pipe({
   name: 'objectPipe'
})
@Injectable()
export class ObjectPipe {

transform(value, args:string[]):any {
    let keys = [];
    for (let key in value) {
        keys.push({key: key, value: value[key]});
    }
    console.log(keys);
    return keys;
}}