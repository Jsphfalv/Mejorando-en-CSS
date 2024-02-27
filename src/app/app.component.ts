import { Component } from '@angular/core';
import { ColorService } from './services/color-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstApp';

  colorSelected = '';

  constructor(private colorService: ColorService) {
    this.colorSelected = this.colorService.selectedColor;
    console.log();
  }
}
