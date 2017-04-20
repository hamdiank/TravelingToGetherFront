import { Injectable } from '@angular/core';
import { Http, Headers, Response ,RequestOptions} from '@angular/http';
import {Router} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(public router: Router,private http: Http, private config: AppConfig) { }

    login(username: string, password: string) {
        let headers = new Headers();
           
           console.log(headers);
     
        let body={
                "login" : username,
                "motDePasse" : password
            };
      
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.config.apiUrl + '/login',body,options)
            .map((response: Response) => {
                console.log("start kkkk")
                 let x = JSON.parse(JSON.stringify(response));
                console.log(x);

// to load the id of our user

                // login successful if there's a jwt token in the response
              let token = x._body ;
                console.log("rrrrrrrggghgjhj");
              //  console.log(token);
                //console.log(JSON.stringify(user));
            
            
                
                if (token ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(token));
                      //this.router.navigate(['/dashboard/statistique']);
              //    console.log (localStorage.getItem('currentUser'));
                   //console.log (user.user.username);


                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}