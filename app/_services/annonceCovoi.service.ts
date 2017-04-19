
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";



@Injectable()
export class AnnonceCovoiService {

    constructor(private http: Http, private config: AppConfig) { }


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