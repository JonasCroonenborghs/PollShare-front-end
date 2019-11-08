import { Observable } from 'rxjs';
import { Melding } from 'src/app/gebruikers/models/melding.model';

export class Gebruiker {
    constructor(
        public gebruikerID: number,
        public email: string,
        public wachtwoord: string,
        public gebruikersnaam: string,
        public token: string,
        public vrienden: Observable<Gebruiker>,
        public meldingen: Observable<Melding>
    ) { }
}
