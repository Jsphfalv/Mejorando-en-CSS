import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PixelArtService {
  constructor() {}

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
    'chocolate',
    'crimson',
    'darkgoldenrod',
  ];
  private selectedColorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public selectedColor$: Observable<string> =
    this.selectedColorSubject.asObservable();

  updateSelectedColor(color: string): void {
    this.selectedColorSubject.next(color);
  }
}
