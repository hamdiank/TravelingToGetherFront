
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { AppConfig } from "../app.config";
import { Station } from "../_models/index";




@Injectable()
export class StationService {

    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        console.log("start api/station ......")
        return this.http.get(this.config.apiUrl + '/station/all', this.jwt()).map((response: Response) => response.json());
    }

    delete(_id: string) {

        return this.http.delete(this.config.apiUrl + '/station/stationDel/' + _id, this.jwt());
    }


    update(station: Station) {
        return this.http.put(this.config.apiUrl + '/station/updateStation/' + station.idStation, station, this.jwt());

    }





    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser });

            return new RequestOptions({ headers: headers });
        }
    }
}