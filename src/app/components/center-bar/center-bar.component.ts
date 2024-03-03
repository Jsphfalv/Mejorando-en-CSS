import { Component, EventEmitter, Input } from '@angular/core';
import { ColorService } from '../../services/color-service';

@Component({
  selector: 'center-bar',
  templateUrl: './center-bar.component.html',
  styleUrls: ['./center-bar.component.css'],
})
export class CenterBarComponent {
  // @Input()
  color = '';

  // colorRecibido(color: string) {
  //   this.colorRecibido(color);
  //   console.log('Hacia el center');
  //   console.log(color);
  // }

  constructor(private colorService: ColorService) {
    this.colorService.selectedColor$.subscribe(
      (colorString) => (this.color = colorString)
    );
  }
}
