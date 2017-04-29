
import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";

import { Pays } from "../_models/Pays";



@Injectable()
export class PaysService {

    constructor(private http: Http, private config: AppConfig) { }


getAll() {
    console.log("start api/pays  ......")
        return this.http.get(this.config.apiUrl +'/admin/pays/all', this.jwt()).map((response: Response) => response.json());
    }

delete(_id: string) {

        return this.http.delete(this.config.apiUrl + '/admin/pays/delPays/' + _id, this.jwt());
    }

update(pays:Pays,v,a,s){
   
        return this.http.put(this.config.apiUrl + '/admin/pays/updatePays/'+ pays.idPays+'/'+v+'/'+a+'/'+s, this.jwt());

}
updateNom(pays:Pays){
    console.log(pays.nom);
 return this.http.put(this.config.apiUrl + '/admin/pays/renomerPays/' + pays.idPays,pays, this.jwt());
}
add(nomPays:string){
       return this.http.post(this.config.apiUrl + '/admin/pays/addPays/'+nomPays, this.jwt());

}

getById(id:string){
     return this.http.get(this.config.apiUrl + '/admin/pays/pays/'+id, this.jwt()).map((response: Response) => response.json());
                
}

getByCity(nom:string){
         return this.http.get(this.config.apiUrl + '/admin/pays/paysByCity/'+nom, this.jwt()).map((response: Response) => response.json());

}

private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        console.log("fggggg   "+currentUser.token);
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