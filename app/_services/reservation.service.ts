import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { AppConfig } from "../app.config";
import { URLSearchParams } from "@angular/http";

@Injectable()

export class ReservationService{

    etat: string= 'false';
    constructor(private http: Http, private config: AppConfig ){}

    reserver(idAnnonceCovoi: string, idUtilisateurReservation: string){
       let headers= new Headers();
       let options= new RequestOptions ({headers: headers}); 
       let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('idAnnonceCovoi', idAnnonceCovoi);
        urlSearchParams.append('idUtilisateurReservation', idUtilisateurReservation);
         urlSearchParams.append('etat', this.etat.toString()); 
         let requestParams = urlSearchParams.toString();
          return this.http.put(this.config.apiUrl+'/reservation?'+requestParams,this.jwt())
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

    confirmerReservation(idReservation){
        return this.http.put(this.config.apiUrl + '/confirmerReservation/'+ idReservation, this.jwt())
         .map((res: Response) => res.json());;
    }
accepterReservation(idReservation){
        
     return this.http.put(this.config.apiUrl+'/accepterReservation/'+idReservation, this.jwt())
        .map((res: Response) => res.json());

}

refuserReservation(idReservation){
        console.log(' refuser reservation ')

     return this.http.put(this.config.apiUrl+'/refuserReservation/'+idReservation, this.jwt())
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