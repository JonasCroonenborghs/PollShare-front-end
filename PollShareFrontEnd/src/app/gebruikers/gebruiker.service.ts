import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gebruiker } from './models/gebruiker.model';
import { Melding } from './models/melding.model';


@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) { }

  getGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>("https://localhost:44376/api/gebruiker");
  }

  getGebruiker(gebruikerID: number) {
    return this.http.get<Gebruiker>("https://localhost:44376/api/gebruiker/" + gebruikerID);
  }

  addGebruiker(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>("https://localhost:44376/api/gebruiker", gebruiker);
  }

  updateGebruiker(gebruiker: Gebruiker, melding: Melding) {
    // gebruiker.meldingen[0] = melding;
    console.log(gebruiker.meldingen);
    console.log(melding);
    // return this.http.put<Gebruiker>("https://localhost:44376/api/gebruiker", gebruiker);
  }

}
