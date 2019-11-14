import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Antwoord } from './models/antwoord.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntwoordService {

  constructor(private http: HttpClient) { }

  getAntwoorden(): Observable<Antwoord[]> {
    return this.http.get<Antwoord[]>("https://localhost:44376/api/antwoord");
  }

  GetAntwoordenByPollID(pollID: number) {
    return this.http.get<Antwoord[]>("https://localhost:44376/api/antwoord/poll/1?pollID=" + pollID);
  }

  getAntwoord(antwoordID: number) {
    return this.http.get<Antwoord>("https://localhost:44376/api/antwoord/" + antwoordID);
  }

  addAntwoord(antwoord: Antwoord) {
    return this.http.post<Antwoord>("https://localhost:44376/api/antwoord", antwoord);
  }
}
