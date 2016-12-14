import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { DatatableComponent } from './datatable.component';
import { DataFilterPipe } from './data-filter.pipe';
import { BrandFilterPipe } from './brand-filter.pipe';
import { WeightFilterPipe } from './weight-filter.pipe';
import { TypeFilterPipe } from './type-filter.pipe';
import { ColorFilterPipe } from './color-filter.pipe';
import { PerfFilterPipe } from './perf-filter.pipe';
import { CutwidthFilterPipe } from './cutwidth-filter.pipe';

@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        FormsModule,
        HttpModule
    ],
    declarations: [DatatableComponent, DataFilterPipe, BrandFilterPipe, WeightFilterPipe, TypeFilterPipe, ColorFilterPipe, PerfFilterPipe, CutwidthFilterPipe],
    exports: [DatatableComponent]
})

export class DatatableModule { }