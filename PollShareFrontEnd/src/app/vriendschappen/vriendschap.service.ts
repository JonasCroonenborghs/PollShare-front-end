import { Injectable } from '@angular/core';
import { Vriendschap } from './models/vriendschap.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gebruiker } from '../gebruikers/models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class VriendschapService {

  constructor(private http: HttpClient) { } 

  getVriendschappen(): Observable<Vriendschap[]> {
    return this.http.get<Vriendschap[]>("https://localhost:44376/api/vriendschap");
  }

  GetAantalVriendenByGebruikerID(gebruikerID: number) {
    return this.http.get<number>("https://localhost:44376/api/Vriendschap/gebruikerId?gebruikerID=" + gebruikerID);
  }

  getVriendschappenByGebruikerID(gebruikerID: number) {
    return this.http.get<Gebruiker[]>("https://localhost:44376/api/vriendschap/gebruiker/1?gebruikerID=" + gebruikerID);
  }

  addVriendschap(vriendschap: Vriendschap) {
    return this.http.post<Vriendschap>("https://localhost:44376/api/vriendschap", vriendschap);
  }
}
