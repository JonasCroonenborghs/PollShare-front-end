import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AntwoordService } from '../antwoord.service';
import { Antwoord } from '../models/antwoord.model';
import { Observable } from 'rxjs';
import { PollService } from 'src/app/polls/poll.service';
import { Poll } from 'src/app/polls/models/poll.model';

@Component({
  selector: 'app-antwoord',
  templateUrl: './antwoord.component.html',
  styleUrls: ['./antwoord.component.css']
})
export class AntwoordComponent implements OnInit {

  pollID: number;
  gebruikerID: number;
  antwoorden: Observable<Antwoord[]>;

  constructor(
    private _pollService: PollService,
    private _antwoordService: AntwoordService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.pollID = params["pollID"];
      this.gebruikerID = params["gebruikerID"];
    });

    this.antwoorden = _antwoordService.GetAntwoordenByPollID(this.pollID);
  }

  antwoordForm = this.fb.group({
    antwoord: '',
    pollID: ''
  });

  onSubmit() {
    this.antwoordForm.value.pollID = this.pollID;
    this._antwoordService.addAntwoord(this.antwoordForm.value).subscribe(result => {
      this.antwoorden = this._antwoordService.GetAntwoordenByPollID(this.pollID);
    });

  }

  toevoegenPollGebruikers() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "pollID": this.pollID,
        "gebruikerID": this.gebruikerID
      }
    }

    this.router.navigate(['/pollGebruiker'], navigationExtras);
  }

  ngOnInit() {
  }
}
