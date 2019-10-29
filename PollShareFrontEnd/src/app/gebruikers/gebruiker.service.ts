import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gebruiker } from './models/gebruiker.model';


@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) { }

  getGebruikers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>("https://localhost:44376/api/gebruiker");
  }

  addGebruiker(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>("https://localhost:44376/api/gebruiker", gebruiker);
  }

}
