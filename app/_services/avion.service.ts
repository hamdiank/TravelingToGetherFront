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
   return this.http.delete(this.config.apiUrl+'/avions/'+ id ,this.jwt());
  }
     add(nom:string){
         console.log(nom);
   return this.http.post(this.config.apiUrl+'/avions/' + nom, this.jwt());

  }
  update(avion:Avion){
   return this.http.put(this.config.apiUrl+'/avions/'+avion.id,avion ,this.jwt());

  }

    // private helper methods
private jwt() {
        // create a uthorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser ) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser});
            return new RequestOptions({ headers: headers });
        }
    }
}