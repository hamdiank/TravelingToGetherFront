import { User } from "./user";

export class AnnonceCovoi {
    id: string;
    datePublication: string;
    dateDepart: string;
    adresseDepart: string;
    adresseArrivee: string;
    utilisateur : User;
    nombrePlaces: string;
    cotisation: string;
}