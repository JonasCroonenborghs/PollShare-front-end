import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Routing
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { InloggenComponent } from './inloggen/inloggen/inloggen.component';
import { GebruikersComponent } from './gebruikers/gebruikers/gebruikers.component';

//Forms
import { ReactiveFormsModule } from '@angular/forms';
import { InloggenModule } from './inloggen/inloggen.module';
import { FormsModule } from '@angular/forms';

//API 
import { HttpClientModule } from '@angular/common/http';
import { GebruikersModule } from './gebruikers/gebruikers.module';
import { RegistrerenComponent } from './registreren/registreren/registreren.component';

//Security (login)
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './inloggen/security.interceptor';

//Test om naar dashboard te gaan
import { InloggenDashboardComponent } from './inloggen/inloggen-dashboard/inloggen-dashboard.component';
import { VriendenComponent } from './vrienden/vrienden.component';
import { PollComponent } from './polls/poll/poll.component';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'inloggen', component: InloggenComponent },
  { path: 'registreren', component: RegistrerenComponent },
  { path: 'gebruikers', component: GebruikersComponent },
  { path: 'dashboard', component: InloggenDashboardComponent },
  { path: 'uitnodigenVrienden', component: VriendenComponent },
  { path: 'aanmakenPoll', component: PollComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    InloggenComponent,
    RegistrerenComponent,
    VriendenComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    ReactiveFormsModule,
    FormsModule,
    InloggenModule,
    HttpClientModule,
    GebruikersModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
