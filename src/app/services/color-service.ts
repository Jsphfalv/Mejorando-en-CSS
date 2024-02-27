import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorService {
  //private colorList = ['red', 'blue', 'black', 'green', 'brown', 'yellow'];

  public selectedColor = '';

  getColor() {}
}
