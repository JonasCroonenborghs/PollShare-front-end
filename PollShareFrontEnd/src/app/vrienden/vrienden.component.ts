import { Component, OnInit } from '@angular/core';
import { Gebruiker } from '../gebruikers/models/gebruiker.model';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MeldingService } from '../meldingen/melding.service';
import { Melding } from '../gebruikers/models/melding.model';
import { AuthenticateService } from '../inloggen/services/authenticate.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden.component.html',
  styleUrls: ['./vrienden.component.css']
})
export class VriendenComponent implements OnInit {

  submitted: boolean = false;
  gebruikerID: number;
  gebruikers: Observable<Gebruiker[]>;

  melding: Melding;

  constructor(
    private fb: FormBuilder,
    private _gebruikerService: GebruikerService,
    private _meldingService: MeldingService,
    private _authenticateService: AuthenticateService,
    private route: ActivatedRoute,
    private router: Router) {
    this.gebruikers = this._gebruikerService.getGebruikers();

    this.gebruikerID = parseInt(localStorage.getItem("gebruikerID"));
  }

  meldingForm = this.fb.group({
    huidigeGebruikerID: '',
    vriendID: '',
    type: "Vriendschapsverzoek"
  });

  onSubmit() {
    // this.submitted = true;
    this.meldingForm.value.huidigeGebruikerID = this.gebruikerID;

    // Toevoegen van de melding
    this._meldingService.addMelding(this.meldingForm.value).subscribe();

    this.melding = this.meldingForm.value;

    // Toevoegen van melding aan vriend
    this._gebruikerService.getGebruiker(this.meldingForm.value.vriendID).subscribe(result => {
      // Hier melding (this.melding) toevoegen aan vriendGebruiker (result)
      console.log(result);
      console.log(this.melding);
      this._gebruikerService.updateGebruiker(result, this.melding);
    });

    this.router.navigate(['/dashboard']);
  }

  ngOnInit() { }
}
