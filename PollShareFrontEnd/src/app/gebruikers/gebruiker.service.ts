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

  GetGebruikerByEmail(email: string) {
    return this.http.get<Gebruiker>("https://localhost:44376/api/Gebruiker/email?email=" + email);
  }

  addGebruiker(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>("https://localhost:44376/api/gebruiker", gebruiker);
  }
}
