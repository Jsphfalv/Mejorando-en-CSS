import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css'],
})
export class PaletteComponent {
  color = ['red', 'blue', 'orange', 'yellow', 'black', 'green'];

  @Output()
  sendColor = new EventEmitter<string>();

  // constructor(private colorService: ColorService) {}

  colorSelected(event: Event) {
    const colorSelected = (event.target as HTMLElement).id;
    this.sendColor.emit(colorSelected);
    // console.log('Desde Palette');
    // console.log(colorSelected);
  }
}

// this.colorService.selectedColor = colorSelected;
// const colorSelected = (event.target as HTMLElement).id;
