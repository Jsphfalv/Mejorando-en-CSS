import { Component, EventEmitter, Output } from '@angular/core';
import { ColorService } from 'src/app/services/color-service';

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
    // this.colorService.selectedColor = colorSelected;
    this.sendColor.emit(colorSelected);
    console.log('Desde Palette');
    console.log(colorSelected);
  }
}

// const colorSelected = (event.target as HTMLElement).id;
