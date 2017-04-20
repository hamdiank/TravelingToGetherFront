import { Pipe, PipeTransform } from '@angular/core';
import { Pays } from "../../_models/index";

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (pays: Pays) {
                return pays.nom.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}