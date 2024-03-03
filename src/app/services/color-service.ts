import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ColorService {
  constructor() {}

  public color = ['red', 'blue', 'orange', 'yellow', 'black', 'green'];

  // Declara un BehaviorSubject privado con un valor inicial (puede ser cualquier color inicial).
  // BehaviorSubject guarda el último valor y lo emite a los nuevos suscriptores.
  private selectedColorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  // Expone el Observable público para que los componentes puedan suscribirse y reaccionar a los cambios de color.
  // Usamos el asObservable() para asegurar que el Observable no pueda emitir valores desde fuera del servicio.
  public selectedColor$: Observable<string> =
    this.selectedColorSubject.asObservable();

  // Función pública para actualizar el color seleccionado.
  // Esta es la única manera de cambiar el valor del color desde fuera de la clase.
  updateSelectedColor(joseph: string): void {
    this.selectedColorSubject.next(joseph);
  }
}
