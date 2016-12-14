import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "weightFilter"
})
export class WeightFilterPipe implements PipeTransform {

    transform(array: any[], query: number): any {
        if (query) {
            return _.filter(array, row=>row.weight_in_kg >= query);
        }
        return array;
    }
}