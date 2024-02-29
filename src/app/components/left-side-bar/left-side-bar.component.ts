import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css'],
})
export class LeftSideBarComponent {
  color = '';

  @Output()
  colorEmitterFromPalette = new EventEmitter<string>();

  colorFromPalette(color: string) {
    this.colorEmitterFromPalette.emit(color);
    console.log('from left side bar,', color);
  }
}
