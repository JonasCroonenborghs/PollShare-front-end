import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GebruikersComponent } from './gebruikers/gebruikers.component';

@NgModule({
  declarations: [GebruikersComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GebruikersComponent
  ]
})
export class GebruikersModule { }
