import { Component, OnInit } from '@angular/core';
import { Mower } from './mower';
import { MowerDetailComponent } from './mower-detail.component';

const MOWERS: Mower[] = [
  { id: 11, image_of: 'kép', brandof_mower: "Makita", name: 'PLM4120N', typeof_mower: "benzinmotoros", color_of: "Türkiz", weight_in_kg: 12, performance_in_hp: 3, cutting_width_cm: 41 },
  { id: 12, image_of: 'kép', brandof_mower: "MTD", name: ' OPTIMA LF 145 H', typeof_mower: "fűnyíró traktor", color_of: "Vörös", weight_in_kg: 150, performance_in_hp: 15, cutting_width_cm: 96 },
  { id: 13, image_of: 'kép', brandof_mower: "MTD", name: 'OPTIMA LG 200 H', typeof_mower: "fűnyíró traktor", color_of: "Vörös", weight_in_kg: 175, performance_in_hp: 19.5, cutting_width_cm: 107 },
  { id: 14, image_of: 'kép', brandof_mower: "MTD", name: 'SMART 38 E', typeof_mower: "elektromos", color_of: "Vörös", weight_in_kg: 7.5, performance_in_hp: 1, cutting_width_cm: 32 },
  { id: 15, image_of: 'kép', brandof_mower: "Kecske", name: 'Ms. Kecskovici', typeof_mower: "biofűnyíró", color_of: "tarka", weight_in_kg: 19, performance_in_hp: 0.5, cutting_width_cm: 10 },
  { id: 16, image_of: 'kép', brandof_mower: "Makita", name: 'PLM4120N', typeof_mower: "benzinmotoros", color_of: "Yellow", weight_in_kg: 12, performance_in_hp: 3, cutting_width_cm: 80 },
  { id: 17, image_of: 'kép', brandof_mower: "Makita", name: 'PLM4120N', typeof_mower: "benzinmotoros", color_of: "Yellow", weight_in_kg: 12, performance_in_hp: 3, cutting_width_cm: 80 },

];

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