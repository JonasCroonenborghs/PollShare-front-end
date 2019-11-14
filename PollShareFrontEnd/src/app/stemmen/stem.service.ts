import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stem } from './models/stem.class';

@Injectable({
  providedIn: 'root'
})
export class StemService {

  constructor(private http: HttpClient) { }

  getStemmen(): Observable<Stem[]> {
    return this.http.get<Stem[]>("https://localhost:44376/api/stem");
  }

  getStem(stemID: number) {
    return this.http.get<Stem>("https://localhost:44376/api/stem/" + stemID);
  }

  addStem(stem: Stem) {
    return this.http.post<Stem>("https://localhost:44376/api/stem", stem);
  }
}
