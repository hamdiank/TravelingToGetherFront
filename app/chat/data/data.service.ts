import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../../app.config';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

    constructor(private http: Http, private config: AppConfig) {

    }


    getAll() {
console.log('enter 65');
        return this.http.get(this.config.apiUrl + 'message/all',
            this.jwt())
            .map((response: Response) => response.json());
    }




    private jwt() {
        // create a uthorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new RequestOptions({ headers: headers });
        }
    }
}