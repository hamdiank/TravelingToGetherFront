
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";
import { URLSearchParams } from "@angular/http";

@Injectable()
export class AnnonceTrainService {
    constructor(private http: Http,private config: AppConfig){}


getAnnoncesTrain(){
   return this.http.get(this.config.apiUrl+'/AnnoncesTrain', this.jwt())
    .map((res: Response) => res.json());
}
ajouterAnnonceTrain(heureDepart: string,dateDepart: string, paysDepart: string, stationDepart: string,
 paysArrivee: string, stationArrivee: string, id: string ){
     let body= {
         "heureDepart": heureDepart ,"dateDepart": dateDepart, "paysDepart": paysDepart, "stationTrainDepart": stationDepart,
 "paysArrivee": paysArrivee, "stationTrainArrivee": stationArrivee
     }
    return this.http.put(this.config.apiUrl+'/AjouterAnnonceTrain/'+id, body,  this.jwt())
    .map((res: Response) => res.json());
}
 getAnnonceTrainById( id : string){
     return this.http.put(this.config.apiUrl+'/getAnnonceTrainById/'+ id, this.jwt())
     .map((res: Response) => res.json());
 }
 getmesAnnoncesTrain(id : string){
    let urlSearchParams= new URLSearchParams();
     urlSearchParams.append('id', id);
     let requestParam= urlSearchParams.toString();
  return  this.http.put(this.config.apiUrl+'/MesAnnoncesTrain?'+requestParam, this.jwt())
    .map((res: Response) => res.json());

}
modifierAnnonceTrain(id: string,heureDepart: string,dateDepart: string, paysDepart: string, stationTrainDepart: string,
 paysArrivee: string, stationTrainArrivee: string, idUtilisateur: string){
 let body= {
       "id": id , "heureDepart": heureDepart ,"dateDepart": dateDepart, "paysDepart": paysDepart, "stationTrainDepart": stationTrainDepart,
 "paysArrivee": paysArrivee, "stationTrainArrivee": stationTrainArrivee
     }
         return this.http.put(this.config.apiUrl+'/updateAnnonceTrain/'+idUtilisateur, body,  this.jwt())
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