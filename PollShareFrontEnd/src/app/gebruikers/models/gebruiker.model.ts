import { Observable } from 'rxjs';
import { Melding } from './melding.model';

export class Gebruiker {
    constructor(
        public gebruikerID: number,
        public email: string,
        public wachtwoord: string,
        public gebruikersnaam: string,
        public geactiveerd: boolean,
        public vrienden: Observable<Gebruiker>,
        public meldingen: Observable<Melding>
    ) { }
}
