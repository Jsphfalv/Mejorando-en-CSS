import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PixelArtService } from '../../services/pixel-art-service';

@Component({
  selector: 'grid-size',
  templateUrl: './grid-size.component.html',
  styleUrls: ['./grid-size.component.css'],
})
export class GridSizeComponent {
  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(casillas: string): void {
    this.onValue.emit(casillas);
    console.log(casillas);
  }
  color = '';

  constructor(private artService: PixelArtService) {
    this.artService.selectedColor$.subscribe(
      (colorString) => (this.color = colorString)
    );
  }
}
