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

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import { MenuComponent } from './menu/menu.component';
import { SidenavListComponent } from './menu/sidenav-list/sidenav-list.component';
import { AntwoordComponent } from './antwoorden/antwoord/antwoord.component';
import { PollGebruiker } from './poll-gebruikers/models/poll-gebruiker.model';
import { PollGebruikerComponent } from './poll-gebruikers/poll-gebruiker/poll-gebruiker.component';
import { StemComponent } from './stemmen/stem/stem.component';
import { PollDetailComponent } from './polls/poll-detail/poll-detail.component';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'inloggen', component: InloggenComponent },
  { path: 'registreren', component: RegistrerenComponent },
  { path: 'gebruikers', component: GebruikersComponent },
  { path: 'dashboard', component: InloggenDashboardComponent },
  { path: 'uitnodigenVrienden', component: VriendenComponent },
  { path: 'aanmakenPoll', component: PollComponent },
  { path: 'aanmakenAntwoord', component: AntwoordComponent },
  { path: 'pollGebruiker', component: PollGebruikerComponent },
  { path: 'StemToevoegen', component: StemComponent },
  { path: 'pollDetail', component: PollDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    InloggenComponent,
    RegistrerenComponent,
    VriendenComponent,
    PollComponent,
    MenuComponent,
    SidenavListComponent,
    GebruikersComponent,
    InloggenDashboardComponent,
    AntwoordComponent,
    PollGebruikerComponent,
    StemComponent,
    PollDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    ReactiveFormsModule,
    FormsModule,
    InloggenModule,
    HttpClientModule,
    GebruikersModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatBadgeModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
