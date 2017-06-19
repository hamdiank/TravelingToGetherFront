import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { AppConfig } from '../app.config';
import { User } from '../_models/index';
import { Observable } from "rxjs/Observable";
import { Avion } from "../_models/avion";

@Injectable()
export class CommentaireService {
    constructor(private http: Http, private config: AppConfig) { 

    }
    

     getCommentairesByAnnonce(idAnnonce: string) {
    
        return this.http.get(this.config.apiUrl +'/commentaire/commentaire/'+idAnnonce,this.jwt())
        .map((response: Response) => response.json());
    }

     deleteCommentaire(id: string) {
         console.log("" + id )
   return this.http.delete(this.config.apiUrl+'/commentaire/dell/'+ id ,this.jwt());
  }
     addCommentaire(text:string, idAnnonce : string, id:string){
         console.log(text);
         console.log(id);
         console.log(idAnnonce)
         let body={"text": text,  'id': id };
   return this.http.post(this.config.apiUrl+'/commentaire/add/'+idAnnonce, body, this.jwt())
   .map((response: Response) => response.json());

  }
  //////////////////Annonce Vol////////////////////////
       addCommentaireAnnonceVol(text:string, idAnnonce : string, id:string){
         console.log(text);
         console.log(id);
         console.log(idAnnonce)
         let body={"text": text,  'id': id };
   return this.http.post(this.config.apiUrl+'/commentaire/addCommAnnonceVol/'+idAnnonce, body, this.jwt())
   .map((response: Response) => response.json());

  }
       getCommentairesByAnnonceVol(idAnnonce: string) {
    
        return this.http.get(this.config.apiUrl +'/commentaire/commentaireAnnonceVol/'+idAnnonce,this.jwt())
        .map((response: Response) => response.json());
    }
///////////////////////////////////////////////////////////
private jwt() {
        // create a uthorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser ) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser});
            return new RequestOptions({ headers: headers });
        }
    }
}