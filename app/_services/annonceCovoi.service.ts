
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";
import { URLSearchParams } from "@angular/http";



@Injectable()
export class AnnonceCovoiService {

    
    constructor(private http: Http, private config: AppConfig) { }

ajouterAnnonceCovoi(datePublication: string,dateDepart: string, adresseDepart: string, adresseArrivee: string, nombrePlaces: string, cotisation: string, id: string ){
    console.log("qqqqqqqqq")
    let headers= new Headers();
    let options= new RequestOptions ({headers: headers});
    let urlSearchParams = new URLSearchParams();
     urlSearchParams.append('datePublication', datePublication);
     urlSearchParams.append('dateDepart', dateDepart);
     urlSearchParams.append('adresseDepart', adresseDepart);
     urlSearchParams.append('adresseArrivee', adresseArrivee);
     urlSearchParams.append('nombrePlaces', nombrePlaces);
     urlSearchParams.append('cotisation', cotisation);
     urlSearchParams.append('id', id);
     
        let body = urlSearchParams.toString();
    //let body={"datePublication": datePublication, "dateDepart": dateDepart , "adresseDepart": adresseDepart , "adresseArrivee": adresseArrivee , "nombrePlaces": nombrePlaces , "cotisation": cotisation, "id": id };
    console.log(body)
 return this.http.put(this.config.apiUrl+'/ajoutAnnonceCovoi?'+body, body, this.jwt())
                        .map((res: Response) => res.json());

}
getAnnoncesCovoi() {
    console.log("annonces covoi affichage ")
        return this.http.get(this.config.apiUrl +'/annonces',
        this.jwt())
        .map((response: Response) => response.json()
        );
    }


private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            headers.append("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
		headers.append("Access-Control-Allow-Origin", "*");
		headers.append("Access-Control-Expose-Headers" ,"Authorization");
        headers.append("Access-Control-Allow-Headers",
				"Origin, X-Requested-With, ,Content-Type, Accept, Access-Control-Allow-Headers, Authorization" );
            return new RequestOptions({ headers: headers });
        
    }
    }

    }