import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AppConfig } from '../app.config';
import { User } from '../_models/index';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig,) { 

    }
    

    getAll() {
    console.log("start api/user eehdf ......")
        return this.http.get(this.config.apiUrl +'/utilisateurs', this.jwt()).map((response: Response) => response.json());
    }
    

    getById(_id: string) {
        return this.http.get(this.config.apiUrl + '/users/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    addUser(user: User) {
        let bodyString = JSON.stringify(user); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('http://localhost:8088/utilisateurs', bodyString, options) // ...using post request
                        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
       
        //return this.http.post(this.config.apiUrl + '/register',user,this.jwt());
    }

    update(user: User) {
        return this.http.put(this.config.apiUrl + '/users/' + user.idUtilisateur, user, this.jwt());
    }

    delete(_id: string) {
        return this.http.delete(this.config.apiUrl + '/deluser/' + _id, this.jwt());
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