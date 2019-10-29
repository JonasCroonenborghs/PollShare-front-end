import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.css']
})
export class RegistrerenComponent implements OnInit {

  submitted: boolean = false;

  gebruikerForm = this.fb.group({
    email: ['', Validators.required],
    wachtwoord: ['', Validators.required],
    gebruikersnaam: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder, 
    private _gebruikerService: GebruikerService,
    private router: Router) { }

  onSubmit() {
    this.submitted = true;
    this._gebruikerService.addGebruiker(this.gebruikerForm.value).subscribe();
    this.router.navigate(['/inloggen']);
  }

  ngOnInit() {
  }
}
