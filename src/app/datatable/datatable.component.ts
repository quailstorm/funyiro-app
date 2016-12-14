import { Component, OnInit, Input } from '@angular/core';
import { DataTableModule } from "angular2-datatable";
import { Http } from "@angular/http";
import { FilterBinding } from '../filter-binding-class';
import { Mower } from './mower';
import { ItemscreenComponentInside } from './itemscreen.component';

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

    @Input() LeftFilter: FilterBinding;

    public data;
    public filterQuery = "";
    public brandfilterQuery = "";
    public weightfilterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "id";
    public sortOrder = "asc";
    public selectedItem: Mower;

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("app/datatable/data.json")
            .subscribe((data) => {
                setTimeout(() => {
                    this.data = data.json();
                }, 1000);
            });
    }

    onSelect(mower: Mower): void {
        this.selectedItem = mower;
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.brandof_mower.length;
    }

}
