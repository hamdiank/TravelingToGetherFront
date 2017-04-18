import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { AppConfig } from '../app.config';
import { User } from '../_models/index';
import { Observable } from "rxjs/Observable";
import { Avion } from "../_models/avion";

@Injectable()
export class AvionService {
       // avionsUrl='http://localhost:8088/avions';
    constructor(private http: Http, private config: AppConfig) { 

    }
    

     getAvions() {
    
        return this.http.get(this.config.apiUrl +'/avions',
         this.jwt())
        .map((response: Response) => response.json());
    }
    

     getById(_id: string) {
        return this.http.get(this.config.apiUrl + '/avions/' + _id, this.jwt()).map((response: Response) => response.json());
    }

     delete(id: number) {
         console.log("i am in AvionService" + id )
   return this.http.delete(this.config.apiUrl+'/avions/'+ id ,this.jwt()).map((response: Response) => response.json());
  }
     add(avion:Avion){
   return this.http.post(this.config.apiUrl+'/avions/',avion ,this.jwt());

  }

    // private helper methods
private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
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