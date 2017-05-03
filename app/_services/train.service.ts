
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
        return this.http.put(this.config.apiUrl + '/trains', train, this.jwt());

    }

    add(nomT: string) {
        console.log(nomT);
        return this.http.post(this.config.apiUrl + '/trains/' + nomT, this.jwt());

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