import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule }      from '@angular/common';

import { AppComponent } from './app.component';
import { MowerDetailComponent } from './itemstable/mower-detail.component';

import { DataTableModule } from "angular2-datatable";
import { DataFilterPipe } from './datatable/data-filter.pipe';

import { MaterialModule } from '@angular/material';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { FilterComponent } from './filter/filter.component';
import { OldfooterComponent } from './oldfooter/oldfooter.component';
import { SorterComponent } from './sorter/sorter.component';
import { ItemstableComponent } from './itemstable/itemstable.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ItemscreenComponent } from './itemscreen/itemscreen.component';
import { DatatableModule } from './datatable/datatable.module';

@NgModule({
  declarations: [
    AppComponent,
    MowerDetailComponent,
    PageheaderComponent,
    FilterComponent,
    OldfooterComponent,
    SorterComponent,
    ItemstableComponent,
    ItemscreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    DatatableModule,
    CommonModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


