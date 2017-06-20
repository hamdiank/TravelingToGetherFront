
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";
import { URLSearchParams } from "@angular/http";

@Injectable()
export class AnnonceVolService {
    constructor(private http: Http,private config: AppConfig){}

getmesAnnoncesVol(id : string){
    let urlSearchParams= new URLSearchParams();
     urlSearchParams.append('id', id);
     let requestParam= urlSearchParams.toString();
  return  this.http.get(this.config.apiUrl+'/MesAnnonceVol?'+requestParam, this.jwt())
    .map((res: Response) => res.json());

}
getAnnoncesVol(){
   return this.http.get(this.config.apiUrl+'/AnnoncesVol', this.jwt())
    .map((res: Response) => res.json());
}

ajouterAnnonceVol(heureDepart: string,dateDepart: string, paysDepart: string, aeroportDepart: string,
 paysArrivee: string, aeroportArrivee: string, description: string, id: string ){
     let body= {
         "heureDepart": heureDepart ,"dateDepart": dateDepart, "paysDepart": paysDepart, "aeroportDepart": aeroportDepart,
 "paysArrivee": paysArrivee, "aeroportArrivee": aeroportArrivee, "description": description
     }
    return this.http.put(this.config.apiUrl+'/AjouterAnnonceVol/'+id, body,  this.jwt())
    .map((res: Response) => res.json());
}

modifierAnnonceVol(id: string,heureDepart: string,dateDepart: string, paysDepart: string, aeroportDepart: string,
 paysArrivee: string, aeroportArrivee: string,description: string, idUtilisateur: string){
 let body= {
       "id": id , "heureDepart": heureDepart ,"dateDepart": dateDepart, "paysDepart": paysDepart, "aeroportDepart": aeroportDepart,
 "paysArrivee": paysArrivee, "aeroportArrivee": aeroportArrivee, "description": description
     }
         return this.http.put(this.config.apiUrl+'/updateAnnonceVol/'+idUtilisateur, body,  this.jwt())
    .map((res: Response) => res.json());

 }
 supprimerAnnonceVol( id : string){
return this.http.delete(this.config.apiUrl+'/deleteAnnonceVol/'+id,this.jwt())
  
 }
 getAnnonceVolById( id : string){
     return this.http.put(this.config.apiUrl+'/getAnnonceVolById/'+ id, this.jwt())
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