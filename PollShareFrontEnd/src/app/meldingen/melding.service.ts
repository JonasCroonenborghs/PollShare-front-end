import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Melding } from '../gebruikers/models/melding.model';

@Injectable({
  providedIn: 'root'
})
export class MeldingService {

  constructor(private http: HttpClient) { }

  getMeldingen(): Observable<Melding[]> {
    return this.http.get<Melding[]>("https://localhost:44376/api/melding");
  }

  getMelding(meldingID: number) {
    return this.http.get<Melding>("https://localhost:44376/api/melding/" + meldingID);
  }

  getMeldingenOntvangen(vriendID: number) {
    return this.http.get<Melding[]>("https://localhost:44376/api/melding/" + vriendID);
  }

  addMelding(melding: Melding) {
    return this.http.post<Melding>("https://localhost:44376/api/melding", melding);
  }
}
