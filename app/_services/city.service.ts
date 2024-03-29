
import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers ,Response} from "@angular/http";
import { AppConfig } from "../app.config";
import { City } from "../_models/city";

@Injectable()
export class CityService {

    constructor(private http: Http, private config: AppConfig) { }

getAll() {
    console.log("start api/city ......")
        return this.http.get(this.config.apiUrl +'/city/all', this.jwt()).map((response: Response) => response.json());
    }

delete(_id: string) {

        return this.http.delete(this.config.apiUrl + '/city/citydel/' + _id, this.jwt());
    }


update(city:City){
        return this.http.put(this.config.apiUrl + '/city/updateCity/' + city.idCity, city, this.jwt());

}





private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser});
            return new RequestOptions({ headers: headers });
        }
    }
}