import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 13000 }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 5000
  }

  agregarNuevoPersonaje(arg: Personaje): void {
    this.personajes.push({
      nombre: arg.nombre,
      poder: arg.poder
    });
  }
}
