
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
        return this.http.put(this.config.apiUrl + '/city/updateAeroport/' + aeroport.idAeroport, aeroport, this.jwt());

}








private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser && currentUser.token) {
            console.log("fdqqqqqqqq: "+currentUser.token);
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