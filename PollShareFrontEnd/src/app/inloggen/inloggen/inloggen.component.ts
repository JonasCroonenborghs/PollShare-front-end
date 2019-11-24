import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { AuthenticateService } from '../services/authenticate.service';
import { GebruikerLogin } from '../models/gebruiker-login.model';
import { Router, NavigationExtras } from '@angular/router';

import { InloggenDashboardComponent } from '../inloggen-dashboard/inloggen-dashboard.component';
import { Melding } from 'src/app/meldingen/models/melding.model';

@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent implements OnInit {
  
  submitted: boolean = false;

  constructor(
    private _authenticateService: AuthenticateService,
    private router: Router
  ) { }

  model: GebruikerLogin = new GebruikerLogin(
    "Test",
    "Test");

  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.model).subscribe(result => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("gebruikerID", result.gebruikerID + "");
      localStorage.setItem("gebruikersnaam", result.gebruikersnaam);
      localStorage.setItem("email", result.email);
      this._authenticateService.isLoggedIn.next(result.token ? true : false);

      this.router.navigate(['/dashboard']);
    });
  }

  ngOnInit() { }
}
