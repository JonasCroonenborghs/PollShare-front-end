import { Component, OnInit } from '@angular/core';
import { Gebruiker } from '../models/gebruiker.model';
import { GebruikerService } from '../gebruiker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gebruikers',
  templateUrl: './gebruikers.component.html',
  styleUrls: ['./gebruikers.component.css']
})
export class GebruikersComponent implements OnInit {

  gebruikers: Observable<Gebruiker[]>;

  constructor(private _gebruikerService: GebruikerService) {
    this.gebruikers = this._gebruikerService.getGebruikers();
  }

  ngOnInit() {
  }

}
