import { Component, OnInit, Input } from '@angular/core';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { AuthenticateService } from '../services/authenticate.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-inloggen-dashboard',
  templateUrl: './inloggen-dashboard.component.html',
  styleUrls: ['./inloggen-dashboard.component.css']
})
export class InloggenDashboardComponent implements OnInit {

  @Input() gebruiker: Gebruiker;

  public gebruikerID: number;
  public gebruikersnaam: string;
  public email: string;

  constructor(private _authenticateService: AuthenticateService, private route: ActivatedRoute, private router: Router) {
    this._authenticateService.isLoggedIn.subscribe(e => {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
      console.log(e);
    });

    this.route.queryParams.subscribe(params => {
      this.gebruikersnaam = params["gebruikersnaam"];
      this.email = params["email"];
  });
  }

  uitloggen() {
    this.router.navigate(['/inloggen']);
  }

  ngOnInit() {
  }

}
