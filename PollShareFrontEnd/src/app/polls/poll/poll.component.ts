import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';
import { Gebruiker } from 'src/app/inloggen/models/gebruiker.model';
import { Poll } from '../models/poll.model';
import { PollService } from '../poll.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  public gebruikerID: number;

  constructor(
    private fb: FormBuilder,
    private _pollService: PollService,
    private route: ActivatedRoute,
    private router: Router) {
      this.gebruikerID = parseInt(localStorage.getItem("gebruikerID"));
    }

  pollForm = this.fb.group({
    naam:  ['', Validators.required],
    makerID: ''
  });

  onSubmit() {
    this.pollForm.value.makerID = this.gebruikerID;
    this._pollService.addPoll(this.pollForm.value).subscribe(result => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "pollID": result.pollID
        }
      };

      this.router.navigate(['/aanmakenAntwoord'], navigationExtras);
    });
  }

  ngOnInit() {
  }

}
