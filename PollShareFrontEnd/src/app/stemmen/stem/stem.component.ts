import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Poll } from 'src/app/polls/models/poll.model';
import { PollService } from 'src/app/polls/poll.service';
import { Observable } from 'rxjs';
import { Antwoord } from 'src/app/antwoorden/models/antwoord.model';
import { AntwoordService } from 'src/app/antwoorden/antwoord.service';
import { FormBuilder } from '@angular/forms';
import { StemService } from '../stem.service';

@Component({
  selector: 'app-stem',
  templateUrl: './stem.component.html',
  styleUrls: ['./stem.component.css']
})
export class StemComponent implements OnInit {

  pollID: number;
  gebruikerID: number;

  poll: Poll;
  pollNaam: string;
  antwoorden: Observable<Antwoord[]>;

  constructor(
    private fb: FormBuilder,
    private _stemService: StemService,
    private _antwoordService: AntwoordService,
    private _pollService: PollService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.pollID = params["pollID"];
    });

    _pollService.getPoll(this.pollID).subscribe(result => {
      this.poll = result;
      this.pollNaam = result.naam;
    });

    this.antwoorden = _antwoordService.GetAntwoordenByPollID(this.pollID);
  }

  stemForm = this.fb.group({
    antwoordID: '',
    gebruikerID: ''
  });

  onSubmit() {
    this.stemForm.value.gebruikerID = this.gebruikerID;
    this.stemForm.value.antwoordID = this.stemForm.value.antwoordID[0]
    this._stemService.addStem(this.stemForm.value).subscribe();

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "pollID": this.pollID
      }
    }

    this.router.navigate(['/pollDetail'], navigationExtras);
  }

  ngOnInit() {
  }

}
