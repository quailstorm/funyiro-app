import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output("value") brandFilterEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output("typevalue") typeFilterEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output("colorvalue") colorFilterEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output("weightvalue") weightFilterEvent: EventEmitter<number> = new EventEmitter<number>();
  weightSliderValue: number = 0;
  @Output("perfvalue") perfFilterEvent: EventEmitter<number> = new EventEmitter<number>();
  perfSliderValue: number = 0;
  @Output("cutwidthvalue") cutwidthFilterEvent: EventEmitter<number> = new EventEmitter<number>();
  cutwidthSliderValue: number = 0;

  constructor() { }

  ngOnInit() {
  }

  sendBrand(element: HTMLInputElement): void {
    this.brandFilterEvent.emit(element.value);
  }

  sendBrandEmpty(): void {
    this.brandFilterEvent.emit("");
  }

  sendType(element: HTMLInputElement): void {
    this.typeFilterEvent.emit(element.value);
  }

  sendTypeEmpty(): void {
    this.typeFilterEvent.emit("");
  }

  sendColor(element: HTMLInputElement): void {
    this.colorFilterEvent.emit(element.value);
  }

  sendColorEmpty(): void {
    this.colorFilterEvent.emit("");
  }

  sendWeight(element: HTMLInputElement): void {
    this.weightFilterEvent.emit(Number(element.value));
  }

  sendPerf(element: HTMLInputElement): void {
    this.perfFilterEvent.emit(Number(element.value));
  }

  sendCutwidth(element: HTMLInputElement): void {
    this.cutwidthFilterEvent.emit(Number(element.value));
  }

}
