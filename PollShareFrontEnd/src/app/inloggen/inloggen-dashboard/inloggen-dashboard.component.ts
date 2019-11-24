import { Component, OnInit, Input } from '@angular/core';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { AuthenticateService } from '../services/authenticate.service';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Observable } from 'rxjs';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';
import { Melding } from 'src/app/gebruikers/models/melding.model';
import { MeldingService } from 'src/app/meldingen/melding.service';
import { Poll } from 'src/app/polls/models/poll.model';
import { PollService } from 'src/app/polls/poll.service';
import { AntwoordService } from 'src/app/antwoorden/antwoord.service';
import { Antwoord } from 'src/app/antwoorden/models/antwoord.model';
import { VriendschapService } from 'src/app/vriendschappen/vriendschap.service';
import { Vriendschap } from 'src/app/vriendschappen/models/vriendschap.model';
import { FormBuilder } from '@angular/forms';

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

  public polls: Observable<Poll[]>;
  public aangemaaktePolls: Observable<Poll[]>;
  public antwoorden: Observable<Antwoord[]>;

  public meldingen: Observable<Melding[]>;
  public meldingGebruikers: Observable<Gebruiker[]>;

  public vriendschappen: Observable<Vriendschap[]>;
  public vrienden: Observable<Gebruiker[]>;

  public aantalVrienden: number = 0;
  public aantalMeldingen: number = 0;

  constructor(
    private fb: FormBuilder,
    private _vriendschapService: VriendschapService,
    private _antwoordService: AntwoordService,
    private _pollService: PollService,
    private _meldingService: MeldingService,
    private _gebruikerService: GebruikerService,
    private _authenticateService: AuthenticateService,
    private route: ActivatedRoute,
    private router: Router) {
    this._authenticateService.isLoggedIn.subscribe(e => {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
      // console.log(e);
    });

    this.gebruikerID = parseInt(localStorage.getItem("gebruikerID"));
    this.gebruikersnaam = localStorage.getItem("gebruikersnaam");
    this.email = localStorage.getItem("email");

    this.vrienden = _vriendschapService.getVriendschappenByGebruikerID(this.gebruikerID);
    this.meldingGebruikers = _meldingService.GetMeldingGebruikersByGebruikerID(this.gebruikerID);
    this.polls = _pollService.GetPollsByGebruikerID(this.gebruikerID);
    this.aangemaaktePolls = _pollService.GetPollsByMakerID(this.gebruikerID);

    _vriendschapService.getVriendschappenByGebruikerID(this.gebruikerID).subscribe(result => {
      this.aantalVrienden++;
    });

    _meldingService.GetMeldingGebruikersByGebruikerID(this.gebruikerID).subscribe(result => {
      this.aantalMeldingen++;
    });
  }

  uitnodigenVrienden() {
    this.router.navigate(['/uitnodigenVrienden']);
  }

  aanmakenPoll() {
    this.router.navigate(['/aanmakenPoll']);
  }

  stemToevoegen(pollID: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "gebruikerID": this.gebruikerID,
        "pollID": pollID
      }
    }

    this.router.navigate(['/StemToevoegen'], navigationExtras);
  }

  pollOpenen(pollID: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "gebruikerID": this.gebruikerID,
        "pollID": pollID
      }
    }

    this.router.navigate(['/pollDetail'], navigationExtras);
  }

  vriendschapForm = this.fb.group({
    gebruikerID: '',
    vriendID: ''
  });

  aanvaardenVriendschap(vriendID: number) {
    this.vriendschapForm.value.gebruikerID = this.gebruikerID;
    this.vriendschapForm.value.vriendID = vriendID;

    this._vriendschapService.addVriendschap(this.vriendschapForm.value).subscribe();
  }

  weigerenVriendscap(huidigeGebruikerID: number) {
    this._meldingService.GetMeldingByHuidigeGebruikerID(huidigeGebruikerID).subscribe(result => {
      this._meldingService.removeMelding(result.meldingID).subscribe();
    });
  }

  uitloggen() {
    this.router.navigate(['/inloggen']);
  }

  ngOnInit() {
  }
}
