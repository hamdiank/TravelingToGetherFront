"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_config_1 = require('../app.config');
var http_2 = require("@angular/http");
var UserService = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.uploadUserImage = function (file, id) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('id', id);
        return this.http.post(this.config.apiUrl + "/upload", formData, this.jwt())
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.uploadVoitureImage = function (file, id) {
        var formData = new FormData();
        formData.append('file', file);
        formData.append('id', id);
        return this.http.post(this.config.apiUrl + "/uploadVoiture", formData, this.jwt())
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getAvis = function (id) {
        console.log("start api/user eehdf ......");
        return this.http.get(this.config.apiUrl + '/avis/avis/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        console.log("start api/user eehdf ......");
        return this.http.get(this.config.apiUrl + '/utilisateurs', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.config.apiUrl + '/utilisateur/' + _id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getImage = function (t) {
        return this.http.get(this.config.apiUrl + '/getImage/' + t, this.jwt()).map(this.extractUrl);
    };
    UserService.prototype.getImageVoiture = function (t) {
        return this.http.get(this.config.apiUrl + '/getImageVoiture/' + t, this.jwt()).map(this.extractUrl);
    };
    UserService.prototype.extractUrl = function (res) {
        console.log("errrrrrrrr  " + res.url);
        return res.url;
    };
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
    UserService.prototype.addUser = function (prenom, nom, profession, numTelephone, email, login, password) {
        var headers = new http_1.Headers();
        console.log(headers);
        var body = { "prenom": prenom, "nom": nom, "profession": profession, "numTelephone": numTelephone, "email": email, "login": login, "motDePasse": password };
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.config.apiUrl + '/inscriptionUtilisateur', body, options)
            .map(function (res) { return res.json(); });
        /*                console.log("bk 1")
                        let x = JSON.parse(JSON.stringify(response));
                        console.log("bk 2");
        
                        let token = x._body;
                        console.log("bk 3");
        
        
                        if (token) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('currentUser', JSON.stringify(token));
                            //this.router.navigate(['/dashboard/statistique']);
                            //    console.log (localStorage.getItem('currentUser'));
                            //console.log (user.user.username);
        
        
                        } */
    };
    UserService.prototype.update = function (user) {
        //  user.idUtilisateur = localStorage.getItem('currentUserId');
        return this.http.put(this.config.apiUrl + '/utilisateur', user, this.jwt());
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/deluser/' + _id, this.jwt());
    };
    ////////////// Confirmer Inscription //////////////////
    UserService.prototype.confirmerInscription = function (email) {
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('email', email);
        var requestParams = urlSearchParams.toString();
        return this.http.put(this.config.apiUrl + '/confirmerInscription?' + requestParams, requestParams, options);
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentToken'));
        //  console.log(localStorage.getItem('currentToken'));
        if (currentUser) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentToken') });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map