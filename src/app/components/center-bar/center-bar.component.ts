import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'center-bar',
  templateUrl: './center-bar.component.html',
  styleUrls: ['./center-bar.component.css'],
})
export class CenterBarComponent {
  @Input()
  color = '';

  colorRecibido(color: string) {
    this.colorRecibido(color);
    console.log('Hacia el center');
    console.log(color);
  }
}
