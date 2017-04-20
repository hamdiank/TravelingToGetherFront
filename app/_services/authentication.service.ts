import { Injectable } from '@angular/core';
import { Http, Headers, Response ,RequestOptions} from '@angular/http';
import {Router} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';

import { AppConfig } from '../app.config';
import { User } from "../_models/index";

@Injectable()
export class AuthenticationService {
      jwtHelper: JwtHelper = new JwtHelper();
user:User;
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
                  //get the user id
           //  console.log("decooooded: "+this.jwtHelper.decodeToken(token).role) ;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentToken', JSON.stringify(token));
                localStorage.setItem('currentUserId', this.jwtHelper.decodeToken(token).userId);
                localStorage.setItem('currentUserRole', this.jwtHelper.decodeToken(token).role);
                      //this.router.navigate(['/dashboard/statistique']);
              //    console.log (localStorage.getItem('currentUser'));
                   //console.log (user.user.username);


                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentToken');
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('currentUserRole');
        
    }
}