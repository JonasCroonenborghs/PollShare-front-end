import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poll } from './models/poll.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>("https://localhost:44376/api/poll");
  }

  getPoll(pollID: number) {
    return this.http.get<Poll>("https://localhost:44376/api/poll/" + pollID);
  }

  getPollByNaam(naam: string) {
    return this.http.get<Poll>("https://localhost:44376/api/Poll/naam?naam=" + naam);
  }

  GetPollsByGebruikerID(gebruikerID: number) {
    return this.http.get<Poll[]>("https://localhost:44376/api/Poll/pollGebruikerID?gebruikerID=" + gebruikerID);
  }

  addPoll(poll: Poll) {
    return this.http.post<Poll>("https://localhost:44376/api/poll", poll);
  }
}
