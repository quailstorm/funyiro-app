import { Component, OnInit, Input } from '@angular/core';
import { Mower } from './mower';

@Component({
  selector: 'my-itemscreen',
  templateUrl: './itemscreen.component.html',
  styleUrls: ['./itemscreen.component.css']
})
export class ItemscreenComponentInside implements OnInit {

@Input() item: Mower;

  constructor() { }

  ngOnInit() {
  }

}
