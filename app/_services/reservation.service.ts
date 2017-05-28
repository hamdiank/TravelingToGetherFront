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
    getReservationsByAnnonceCovoi(idAnnonceCovoi){
        let headers= new Headers();
        let options= new RequestOptions ({headers: headers}); 
        let urlSearchParams = new URLSearchParams();
         urlSearchParams.append('idAnnonceCovoi', idAnnonceCovoi);
        let body= urlSearchParams.toString();
        console.log(body)
    return this.http.get(this.config.apiUrl+'/getReservationsByAnnonceCovoi?'+body, this.jwt())
     .map((res: Response) => res.json());


    }
    ///////////////////////////////////

    getReservationsByUtilisateurReservation(idUtilisateur){
        console.log('reservation service')
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('idUtilisateur', idUtilisateur);  
        let body= urlSearchParams.toString();
        console.log(body)
     return this.http.get(this.config.apiUrl+'/getReservationsByUtilisateurReservation?'+body, this.jwt())
        .map((res: Response) => res.json());


    }

    annulerReservation(idReservation){

          return this.http.delete(this.config.apiUrl + '/annulerReservation/'+ idReservation, this.jwt());
    }
accepterReservation(idReservation, etat){
        console.log(' accepter reservation ')
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('idReservation', idReservation); 
        urlSearchParams.append('etat', etat); 
        let requestParams= urlSearchParams.toString();
        console.log(requestParams)
     return this.http.put(this.config.apiUrl+'/accepterReservation?'+requestParams, this.jwt())
        .map((res: Response) => res.json());

}

refuserReservation(idReservation, etat){
        console.log(' accepter reservation ')
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('idReservation', idReservation); 
        urlSearchParams.append('etat', etat); 
        let requestParams= urlSearchParams.toString();
        console.log(requestParams)
     return this.http.put(this.config.apiUrl+'/refuserReservation?'+requestParams, this.jwt())
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