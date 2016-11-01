import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MowerDetailComponent } from './itemstable/mower-detail.component';

import { MaterialModule } from '@angular/material';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { FilterComponent } from './filter/filter.component';
import { OldfooterComponent } from './oldfooter/oldfooter.component';
import { SorterComponent } from './sorter/sorter.component';
import { ItemstableComponent } from './itemstable/itemstable.component';

@NgModule({
  declarations: [
    AppComponent,
    MowerDetailComponent,
    PageheaderComponent,
    FilterComponent,
    OldfooterComponent,
    SorterComponent,
    ItemstableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


