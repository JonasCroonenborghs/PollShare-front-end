import { Observable } from 'rxjs';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { Antwoord } from 'src/app/antwoorden/models/antwoord.model';

export class Poll {
    constructor(
        public pollID: number,
        public naam: string,
        public antwoorden: Observable<Antwoord[]>
        // public deelnemers: Observable<Gebruiker>
        ) { }
}
