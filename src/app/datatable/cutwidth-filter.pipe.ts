import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "cutwidthFilter"
})
export class CutwidthFilterPipe implements PipeTransform {

    transform(array: any[], query: number): any {
        if (query) {
            return _.filter(array, row=>row.cutting_width_cm >= query);
        }
        return array;
    }
}