import { Component } from '@angular/core';
import { PixelArtService } from 'src/app/services/pixel-art-service';

@Component({
  selector: 'app-pixel-art',
  templateUrl: './pixel-art.component.html',
  styleUrls: ['./pixel-art.component.css'],
})
export class PixelArtComponent {
  color = [
    'red',
    'blue',
    'orange',
    'yellow',
    'black',
    'green',
    'white',
    'coral',
    'gray',
    'yellowgreen',
    'blueviolet',
    'crimson',
    'darkgoldenrod',
  ];

  constructor(private artService: PixelArtService) {}

  colorSelected(event: Event) {
    const colorSelectedinFunction = (event.target as HTMLElement).id;
    this.artService.updateSelectedColor(colorSelectedinFunction);
  }

  // Implementar que se cambie de color el recuadro seleccionado
}
