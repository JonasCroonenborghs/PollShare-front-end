import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrerenComponent } from './registreren/registreren.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  //declarations: [RegistrerenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegistrerenModule { }
