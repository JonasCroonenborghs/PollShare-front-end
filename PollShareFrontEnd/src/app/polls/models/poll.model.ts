import { Observable } from 'rxjs';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';

export class Poll {
    constructor(
        public pollID: number,
        public naam: string,
        public deelnemers: Observable<Gebruiker>) { }
}
