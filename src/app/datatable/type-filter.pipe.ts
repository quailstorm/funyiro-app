import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "typeFilter"
})
export class TypeFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.typeof_mower.indexOf(query) > -1);
        }
        return array;
    }
}