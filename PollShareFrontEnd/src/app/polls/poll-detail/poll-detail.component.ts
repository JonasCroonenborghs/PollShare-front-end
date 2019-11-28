import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { Antwoord } from 'src/app/antwoorden/models/antwoord.model';
import { AntwoordService } from 'src/app/antwoorden/antwoord.service';
import { Poll } from '../models/poll.model';
import { PollService } from '../poll.service';
import { PollGebruikerService } from 'src/app/poll-gebruikers/poll-gebruiker.service';
import { PollGebruiker } from 'src/app/poll-gebruikers/models/poll-gebruiker.model';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';
import { StemService } from 'src/app/stemmen/stem.service';
import { Stem } from 'src/app/stemmen/models/stem.class';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {

  pollID: number;
  gebruikerID: number;

  poll: Poll;
  pollNaam: string;
  antwoorden: Observable<Antwoord[]>;

  constructor(
    private _pollService: PollService,
    private _antwoordService: AntwoordService,
    private _pollGebruikerService: PollGebruikerService,
    private _gebruikerService: GebruikerService,
    private _stemService: StemService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.pollID = params["pollID"];
    });

    this.gebruikerID = parseInt(localStorage.getItem("gebruikerID"));
    _pollService.getPoll(this.pollID).subscribe(result => {
      this.poll = result;
      this.pollNaam = result.naam;
    });

    this.antwoorden = _antwoordService.GetAntwoordenByPollID(this.pollID);
  }

  stemToevoegen(pollID: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "pollID": pollID
      }
    }

    this.router.navigate(['/StemToevoegen'], navigationExtras);
  }

  ngOnInit() {}
}
