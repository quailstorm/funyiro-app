import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "brandFilter"
})
export class BrandFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.brandof_mower.indexOf(query) > -1);
        }
        return array;
    }
}