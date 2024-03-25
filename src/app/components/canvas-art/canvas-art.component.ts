import { Component, Input } from '@angular/core';
import { PixelArtService } from '../../services/pixel-art-service';

@Component({
  selector: 'canvas-art',
  templateUrl: './canvas-art.component.html',
  styleUrls: ['./canvas-art.component.css'],
})
export class CanvasArtComponent {
  @Input()
  casillas = '';

  color = '';

  constructor(private artService: PixelArtService) {
    this.artService.selectedColor$.subscribe(
      (colorString) => (this.color = colorString)
    );
  }
}
