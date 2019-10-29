import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InloggenComponent } from './inloggen/inloggen.component';

import { ReactiveFormsModule } from '@angular/forms';
import { InloggenDashboardComponent } from './inloggen-dashboard/inloggen-dashboard.component';

@NgModule({
  //declarations: [InloggenComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [InloggenDashboardComponent]
})
export class InloggenModule { }
