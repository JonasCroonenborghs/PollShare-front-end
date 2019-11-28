import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { Observable } from 'rxjs';
import { PollGebruikerService } from '../poll-gebruiker.service';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { VriendschapService } from 'src/app/vriendschappen/vriendschap.service';

@Component({
  selector: 'app-poll-gebruiker',
  templateUrl: './poll-gebruiker.component.html',
  styleUrls: ['./poll-gebruiker.component.css']
})
export class PollGebruikerComponent implements OnInit {

  pollID: number;
  gebruikerID: number;
  vrienden: Observable<Gebruiker[]>;
  pollGebruikers: Observable<PollGebruiker[]>;

  constructor(
    private _vriendschapService: VriendschapService,
    private _pollGebruikerService: PollGebruikerService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.pollID = params["pollID"];
    });

    this.gebruikerID = parseInt(localStorage.getItem("gebruikerID"));
    this.vrienden = _vriendschapService.getVriendschappenByGebruikerID(this.gebruikerID);
    this.pollGebruikers = _pollGebruikerService.GetPollGebruikersByPollID(this.pollID);
  }

  pollGebruikerForm = this.fb.group({
    gebruikerID: '',
    pollID: ''
  });

  onSubmit() {
    this.pollGebruikerForm.value.pollID = this.pollID;
    this._pollGebruikerService.addPollGebruiker(this.pollGebruikerForm.value).subscribe(result => {
      this.pollGebruikers = this._pollGebruikerService.GetPollGebruikersByPollID(this.pollID);
    });

  }

  naarStartscherm() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
