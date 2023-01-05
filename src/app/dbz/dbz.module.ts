import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AddPersonajeComponent } from './add-personaje/add-personaje.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AddPersonajeComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
