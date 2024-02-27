import { Component, Input } from '@angular/core';

@Component({
  selector: 'center-bar',
  templateUrl: './center-bar.component.html',
  styleUrls: ['./center-bar.component.css'],
})
export class CenterBarComponent {
  color: string = '';

  colorRecibido(color: Event) {
    console.log('Hacia el center');
    console.log(color);
    this.colorRecibido(color);
  }
}
