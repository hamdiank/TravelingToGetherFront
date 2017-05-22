import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { AppConfig } from "../app.config";
import { URLSearchParams } from "@angular/http";

@Injectable()

export class ReservationService{

    etat: boolean= false;

    constructor(private http: Http, private config: AppConfig ){}

    reserver(idAnnonceCovoi: string, idUtilisateurReservation: string){
       let headers= new Headers();
       let options= new RequestOptions ({headers: headers}); 
       let urlSearchParams = new URLSearchParams();
         urlSearchParams.append('idAnnonceCovoi', idAnnonceCovoi);
         urlSearchParams.append('idUtilisateurReservation', idUtilisateurReservation);
         urlSearchParams.append('etat', this.etat.toString()); 
         let body = urlSearchParams.toString();
          return this.http.put(this.config.apiUrl+'/reservation?'+body, body, this.jwt())
                        .map((res: Response) => res.json());
    }
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser});
            return new RequestOptions({ headers: headers });
        
    }
    }

}