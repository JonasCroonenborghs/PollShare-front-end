import { Component, OnInit } from '@angular/core';
import { Gebruiker } from '../gebruikers/models/gebruiker.model';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MeldingService } from '../meldingen/melding.service';
import { Melding } from '../gebruikers/models/melding.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden.component.html',
  styleUrls: ['./vrienden.component.css']
})
export class VriendenComponent implements OnInit {

  gebruikerID: number;
  gebruikers: Observable<Gebruiker[]>;

  melding: Melding;

  constructor(
    private fb: FormBuilder,
    private _gebruikerService: GebruikerService,
    private _meldingService: MeldingService,
    private route: ActivatedRoute,
    private router: Router) {
    this.gebruikers = this._gebruikerService.getGebruikers();

    this.gebruikerID = parseInt(localStorage.getItem("gebruikerID"));
  }

  meldingForm = this.fb.group({
    huidigeGebruikerID: '',
    vriendID: ['', Validators.required],
    type: "Vriendschapsverzoek"
  });

  onSubmit() {
    this.meldingForm.value.huidigeGebruikerID = this.gebruikerID;

    this._gebruikerService.GetGebruikerByEmail(this.meldingForm.value.vriendID).subscribe(result => {
      this.meldingForm.value.vriendID = result.gebruikerID;
      this._meldingService.addMelding(this.meldingForm.value).subscribe();
    });

    this.router.navigate(['/dashboard']);
  }

  ngOnInit() { }
}
