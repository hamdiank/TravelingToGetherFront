
import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";
import { Aeroport } from "../_models/aeroport";


@Injectable()
export class AeroportService {

    constructor(private http: Http, private config: AppConfig) { }

getAll() {
    console.log("start api/Aero ......")
        return this.http.get(this.config.apiUrl +'/aeroport/all', this.jwt()).map((response: Response) => response.json());
    }

delete(_id: string) {

        return this.http.delete(this.config.apiUrl + '/aeroport/aeroportDel/' + _id, this.jwt());
    }


update(aeroport:Aeroport){
        return this.http.put(this.config.apiUrl + '/aeroport/updateAeroport/' + aeroport.idAeroport, aeroport, this.jwt());

}








private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser ) {
          
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser});
            return new RequestOptions({ headers: headers });
        }
    }
}