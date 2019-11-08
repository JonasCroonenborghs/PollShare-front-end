import { Component, OnInit, Input } from '@angular/core';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { AuthenticateService } from '../services/authenticate.service';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Observable } from 'rxjs';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';
import { Melding } from 'src/app/gebruikers/models/melding.model';

@Component({
  selector: 'app-inloggen-dashboard',
  templateUrl: './inloggen-dashboard.component.html',
  styleUrls: ['./inloggen-dashboard.component.css']
})
export class InloggenDashboardComponent implements OnInit {

  @Input() gebruiker: Gebruiker;

  public test: number;
  public gebruikerID: number;
  public gebruikersnaam: string;
  public email: string;
  public vrienden: Observable<Gebruiker>;
  public meldingen: Observable<Melding>;

  constructor(private _gebruikerService: GebruikerService, private _authenticateService: AuthenticateService, private route: ActivatedRoute, private router: Router) {
    this._authenticateService.isLoggedIn.subscribe(e => {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
      // console.log(e);
    });

    this.route.queryParams.subscribe(params => {
      this.gebruikerID = params["gebruikerID"];
      this.gebruikersnaam = params["gebruikersnaam"];
      this.email = params["email"];
      this.vrienden = params["vrienden"];
      this.meldingen = params["meldingen"];
    });
  }

  uitnodigenVrienden() {
    this._gebruikerService.getGebruiker(this.gebruikerID).subscribe(result => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "gebruikerID": result.gebruikerID
        }
      };

      this.router.navigate(['/uitnodigenVrienden'], navigationExtras);
    });
  }

  aanmakenPoll() {
    this._gebruikerService.getGebruiker(this.gebruikerID).subscribe(result => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "gebruikerID": result.gebruikerID
        }
      };

      this.router.navigate(['/aanmakenPoll'], navigationExtras);
    });
  }

  uitloggen() {
    this.router.navigate(['/inloggen']);
  }

  ngOnInit() {
  }

}
