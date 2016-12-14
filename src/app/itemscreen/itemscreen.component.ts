import { Component, OnInit, Input } from '@angular/core';
import { Mower } from './mower';

@Component({
  selector: 'app-itemscreen',
  templateUrl: './itemscreen.component.html',
  styleUrls: ['./itemscreen.component.css']
})
export class ItemscreenComponent implements OnInit {

@Input() item: Mower;

  constructor() { }

  ngOnInit() {
  }

}
