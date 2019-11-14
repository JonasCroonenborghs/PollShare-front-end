import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Melding } from '../gebruikers/models/melding.model';
import { Gebruiker } from '../gebruikers/models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class MeldingService {

  constructor(private http: HttpClient) { }

  getMeldingen(): Observable<Melding[]> {
    return this.http.get<Melding[]>("https://localhost:44376/api/melding");
  }

  GetMeldingGebruikersByGebruikerID(gebruikerID: number) {
    return this.http.get<Gebruiker[]>("https://localhost:44376/api/Melding/gebruiker/1?gebruikerID=" + gebruikerID);
  }

  getMelding(meldingID: number) {
    return this.http.get<Melding>("https://localhost:44376/api/melding/" + meldingID);
  }

  addMelding(melding: Melding) {
    return this.http.post<Melding>("https://localhost:44376/api/melding", melding);
  }

  removeMelding(meldingID: number) {
    return this.http.delete<Melding>("https://localhost:44376/api/melding/" + meldingID);
  }
}
