import { Component } from '@angular/core';
import { Mower } from './itemstable/mower';

import { FilterBinding } from './filter-binding-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter: FilterBinding = new FilterBinding();
  nyiro: Mower = new Mower();
}
