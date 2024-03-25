import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NumeroCasillasService {
  constructor() {}

  private numeroCasillasSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public numeroCasillas$: Observable<string> =
    this.numeroCasillasSubject.asObservable();

  updateNumeroCasillas(casillas: string): void {
    this.numeroCasillasSubject.next(casillas);
  }
}
