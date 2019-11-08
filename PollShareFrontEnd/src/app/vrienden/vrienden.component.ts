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

  constructor(
    private fb: FormBuilder,
    private _gebruikerService: GebruikerService,
    private _meldingService: MeldingService,
    private _authenticateService: AuthenticateService,
    private route: ActivatedRoute,
    private router: Router) {
    this.gebruikers = this._gebruikerService.getGebruikers();

    this.route.queryParams.subscribe(params => {
      this.gebruikerID = params["gebruikerID"];
    });
  }

  meldingForm = this.fb.group({
    //huidigeGebruikerID: this.gebruikerID geeft error
    huidigeGebruikerID: 2,
    vriendID: '',
    aanvaard: false
  });

  onSubmit() {
    this.submitted = true;
    this._meldingService.addMelding(this.meldingForm.value).subscribe();
  }

  ngOnInit() { }
}
