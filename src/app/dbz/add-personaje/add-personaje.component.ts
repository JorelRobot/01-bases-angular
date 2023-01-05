import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  @Input('nuevo')
  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 10000
  }

  @Output()
  onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return;

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo.nombre = '';
    this.nuevo.poder = undefined;
  }
}
