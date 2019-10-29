import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { AuthenticateService } from '../services/authenticate.service';
import { GebruikerLogin } from '../models/gebruiker-login.model';
import { Router, NavigationExtras } from '@angular/router';

import { InloggenDashboardComponent } from '../inloggen-dashboard/inloggen-dashboard.component';

@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent implements OnInit {

  constructor(
    private _authenticateService: AuthenticateService,
    private router: Router
  ) { }

  submitted: boolean = false;

  model: GebruikerLogin = new GebruikerLogin(
    "Test",
    "Test");

  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.model).subscribe(result => {
      localStorage.setItem("token", result.token);
      this._authenticateService.isLoggedIn.next(result.token ? true : false);

      //Naar dashboardComponent gaan
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "gebruikersnaam": result.gebruikersnaam,
          "email": result.email
        }
      };
      this.router.navigate(['/dashboard'], navigationExtras);
    });
  }

  ngOnInit() { }
}
