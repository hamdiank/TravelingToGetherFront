
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { AppConfig } from "../app.config";
import { Train } from "../_models/train";


@Injectable()
export class TrainService {

    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        console.log("start api/train ......")
        return this.http.get(this.config.apiUrl + '/trains', this.jwt()).map((response: Response) => response.json());
    }

    delete(_id: number) {

        return this.http.delete(this.config.apiUrl + '/trains/' + _id, this.jwt());
    }


    update(train: Train) {
        return this.http.put(this.config.apiUrl + '//trains/' + train.id, train, this.jwt());

    }








    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            headers.append("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
            headers.append("Access-Control-Allow-Origin", "*");
            headers.append("Access-Control-Expose-Headers", "Authorization");
            headers.append("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, ,Content-Type, Accept, Access-Control-Allow-Headers, Authorization");
            return new RequestOptions({ headers: headers });
        }
    }
}