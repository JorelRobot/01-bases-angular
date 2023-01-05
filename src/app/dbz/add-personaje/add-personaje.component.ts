import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  @Input('data')
  personajes: Personaje[] = [];

  @Input('nuevo')
  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 10000
  }

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return;

    this.personajes.push({ nombre: this.nuevo.nombre, poder: this.nuevo.poder });
    this.nuevo.nombre = '';
    this.nuevo.poder = undefined;

    console.log(this.nuevo);
  }
}
