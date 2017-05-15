
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";
import { URLSearchParams } from "@angular/http";



@Injectable()
export class AnnonceCovoiService {

    
    constructor(private http: Http, private config: AppConfig) { }

    //////////////////////////
getMesAnnoncesCovoi(id: string){
    let headers= new Headers();
    let options= new RequestOptions({headers:headers});
    let urlSearchParams= new URLSearchParams();
     urlSearchParams.append('id', id);
     let body= urlSearchParams.toString();
     console.log(body)
    return this.http.get(this.config.apiUrl+'/maListeAnnonceCovoi?'+body, this.jwt())
     .map((res: Response) => res.json());
}


/************************************************* */

getAnnonceCovoi(id :number){
    let idAnnonceCovoi= id.toString();
    console.log('kkkkkkkkkkkkkkkk')
    return this.http.get(this.config.apiUrl+'/getAnnonceCovoiById/'+idAnnonceCovoi, this.jwt()).map((res: Response) => res.json());
}

/****************************************************** */


ajouterAnnonceCovoi(heureDepart: string,dateDepart: string, paysDepart: string, villeDepart: string,
 paysArrivee: string, villeArrivee: string,nombrePlaces:string, cotisation: string, id: string ){
    console.log("qqqqqqqqq")
    let headers= new Headers();
    let options= new RequestOptions ({headers: headers});
    let urlSearchParams = new URLSearchParams();
     urlSearchParams.append('heureDepart', heureDepart);
     urlSearchParams.append('dateDepart', dateDepart);
     console.log(dateDepart)
     urlSearchParams.append('paysDepart', paysDepart);
     urlSearchParams.append('villeDepart', villeDepart);
     urlSearchParams.append('paysArrivee', paysArrivee);
     urlSearchParams.append('villeArrivee', villeArrivee);
     urlSearchParams.append('nombrePlaces', nombrePlaces);
     urlSearchParams.append('cotisation', cotisation);
     urlSearchParams.append('id', id);
     
        let body = urlSearchParams.toString();
    //let body={"datePublication": datePublication, "dateDepart": dateDepart , "adresseDepart": adresseDepart , "adresseArrivee": adresseArrivee , "nombrePlaces": nombrePlaces , "cotisation": cotisation, "id": id };
    console.log(body)
 return this.http.put(this.config.apiUrl+'/ajoutAnnonceCovoi?'+body, body, this.jwt())
                        .map((res: Response) => res.json());

}

//////////////////////////////////////

modifierAnnonceCovoi(datePublication: string,dateDepart: string, adresseDepart: string, adresseArrivee: string,
 nombrePlaces: string, cotisation: string, id: string, idUtilisateur: string){
    console.log("i am here")
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
    urlSearchParams.append('idUtilisateur', idUtilisateur);

       let body = urlSearchParams.toString();
       console.log(body)
return this.http.put(this.config.apiUrl+'/updateAnnonceCovoi?'+body, body, this.jwt())
                        .map((res: Response) => res.json());

}

//////////////////////////////////

getAnnoncesCovoi() {
    console.log("annonces covoi affichage ")
        return this.http.get(this.config.apiUrl +'/annonces',
        this.jwt())
        .map((response: Response) => response.json()
        );
    }

//////////////////////////////////////

supprimerAnnonceCovoi( id : string ){
    console.log("supprimer annonce covoi")
    return this.http.delete(this.config.apiUrl+'/deleteAnnonceCovoi/'+ id,this.jwt())
    .map((response: Response)=> response.json()
    );
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