import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PollGebruiker } from './models/poll-gebruiker.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollGebruikerService {

  constructor(private http: HttpClient) { }

  getPollGebruikers(): Observable<PollGebruiker[]> {
    return this.http.get<PollGebruiker[]>("https://localhost:44376/api/pollGebruiker");
  }

  getPollGebruiker(pollGebruikerID: number) {
    return this.http.get<PollGebruiker>("https://localhost:44376/api/pollGebruiker/" + pollGebruikerID);
  }

  addPollGebruiker(pollGebruiker: PollGebruiker) {
    return this.http.post<PollGebruiker>("https://localhost:44376/api/pollGebruiker", pollGebruiker);
  }
}
