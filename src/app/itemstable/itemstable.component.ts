import { Component, OnInit } from '@angular/core';
import { Mower } from './mower';
import { MowerDetailComponent } from './mower-detail.component';
import { Mowerclass } from './MowerService';

var newmower = new Mowerclass("powerDesc");
const MOWERS = newmower.getMowers();

@Component({
  selector: 'app-itemstable',
  templateUrl: './itemstable.component.html',
  styleUrls: ['./itemstable.component.css']
})
export class ItemstableComponent{

  title = 'Fűnyíró bolt';
  mowers = MOWERS;
  selectedMower: Mower;

  onSelect(mower: Mower): void {
    this.selectedMower = mower;
  }

}