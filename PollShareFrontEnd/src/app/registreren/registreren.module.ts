import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrerenComponent } from './registreren/registreren.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegistrerenModule { }
