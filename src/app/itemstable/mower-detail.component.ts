import { Component, Input } from '@angular/core';

import { Mower } from './mower';

@Component({
  selector: 'my-mower-detail',
  template: `
    <div *ngIf="mower" class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
      <h2>{{mower.name}} részletek:</h2>
      <div><label>Név: </label>{{mower.name}} {{mower.typeof_mower}}</div>
     <!-- <div>
        <label>name: </label>
        <input [(ngModel)]="mower.name" placeholder="name"/>
      </div> -->
    </div>
  `
})
export class MowerDetailComponent {
  @Input()
  mower: Mower;
}