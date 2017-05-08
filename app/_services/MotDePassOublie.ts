

import { Injectable } from '@angular/core';
import { Http,Response ,Headers,RequestOptions } from "@angular/http";
import { AppConfig } from "../app.config";

@Injectable()
export class MotDePasseOublieService {

   constructor(private http: Http, private config: AppConfig) { }


reset(mail:string ){
    
      return this.http.post(this.config.apiUrl + '/mail/send/'+mail+".", this.jwt()).map((response: Response) => response.json());

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