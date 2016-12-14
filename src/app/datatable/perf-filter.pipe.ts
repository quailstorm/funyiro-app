import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "perfFilter"
})
export class PerfFilterPipe implements PipeTransform {

    transform(array: any[], query: number): any {
        if (query) {
            return _.filter(array, row=>row.performance_in_hp >= query);
        }
        return array;
    }
}