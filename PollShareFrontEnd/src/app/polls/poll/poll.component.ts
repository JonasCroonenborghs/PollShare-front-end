import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';
import { Gebruiker } from 'src/app/inloggen/models/gebruiker.model';
import { Poll } from '../models/poll.model';
import { PollService } from '../poll.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  public gebruikerID: number;
  submitted: boolean = false;
  poll: Poll = new Poll(2, "Test", null);
  pollTest: Poll;

  constructor(
    private fb: FormBuilder,
    private _pollService: PollService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.gebruikerID = params["gebruikerID"];
    });
  }

  pollForm = this.fb.group({
    naam: ''
  });

  onSubmit() {
    // this.submitted = true;
    this._pollService.addPoll(this.pollForm.value).subscribe(result => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "pollID": result.pollID,
          "gebruikerID": this.gebruikerID
        }
      };

      this.router.navigate(['/aanmakenAntwoord'], navigationExtras);
    });
  }

  ngOnInit() {
  }

}
