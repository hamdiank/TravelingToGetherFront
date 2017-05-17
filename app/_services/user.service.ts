import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app.config';
import { User } from '../_models/index';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) {

    }

uploadUserImage(file : File ,id:string):Observable<boolean>{
        let formData:FormData = new FormData();
        formData.append('file',file);
        formData.append('id',id);
        return  this.http.post(this.config.apiUrl +"/upload",formData,this.jwt())
            .map(response=>response.json())
    }
    uploadVoitureImage(file : File ,id:string):Observable<boolean>{
        let formData:FormData = new FormData();
        formData.append('file',file);
        formData.append('id',id);
        return  this.http.post(this.config.apiUrl +"/uploadVoiture",formData,this.jwt())
            .map(response=>response.json())
    }

    getAll() {
        console.log("start api/user eehdf ......")
        return this.http.get(this.config.apiUrl + '/utilisateurs', this.jwt()).map((response: Response) => response.json());
    }


    getById(_id: string) {
        return this.http.get(this.config.apiUrl + '/utilisateur/' + _id, this.jwt()).map((response: Response) => response.json());
    }
    getImage(t: string) {
        return this.http.get(this.config.apiUrl + '/getImage/' + t, this.jwt()).map(this.extractUrl);
    }
    getImageVoiture(t: string) {
        return this.http.get(this.config.apiUrl + '/getImageVoiture/' + t, this.jwt()).map(this.extractUrl);
    }

extractUrl(res:Response):string {
    console.log("errrrrrrrr  "+res.url);
    return res.url;
  }
    /*
        addUser(user: User) {
            let bodyString = JSON.stringify(user); // Stringify payload
            let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
            let options       = new RequestOptions({ headers: headers }); // Create a request option
    
            return this.http.post('http://localhost:8088/utilisateurs', bodyString, this.jwt()) // ...using post request
                            
                             //.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         //    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
           
            //return this.http.post(this.config.apiUrl + '/register',user,this.jwt());
    */
    addUser(firstname: String, lastname: String, username: String, password: String) {

        let headers = new Headers();

        console.log(headers);

        let body = { "nom": firstname, "prenom": lastname, "login": username, "motDePasse": password };

        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.config.apiUrl + '/utilisateurs', body, options)
            .map((response: Response) => {

                console.log("bk 1")
                 let x = JSON.parse(JSON.stringify(response));
                console.log("bk 2");
               
              let token = x._body ;
                console.log("bk 3");


                if (token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(token));
                    //this.router.navigate(['/dashboard/statistique']);
                    //    console.log (localStorage.getItem('currentUser'));
                    //console.log (user.user.username);


                }
            });


    }

    update(user: User) {
         
         user.idUtilisateur=localStorage.getItem('currentUserId');
        return this.http.put(this.config.apiUrl + '/utilisateur' , user, this.jwt());
    }

    delete(_id: string) {
        return this.http.delete(this.config.apiUrl + '/deluser/' + _id, this.jwt());
    }


    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentToken'));
      //  console.log(localStorage.getItem('currentToken'));
        if (currentUser ) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentToken') });
            return new RequestOptions({ headers: headers });
        }
    }
}