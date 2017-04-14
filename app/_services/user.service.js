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
var UserService = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.getAll = function () {
        console.log("start api/user eehdf ......");
        return this.http.get(this.config.apiUrl + '/utilisateurs', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.config.apiUrl + '/utilisateur/' + _id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.addUser = function (user) {
        var bodyString = JSON.stringify(user); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post('http://localhost:8088/utilisateurs', bodyString, this.jwt()); // ...using post request
        //.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        //return this.http.post(this.config.apiUrl + '/register',user,this.jwt());
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.config.apiUrl + '/utilisateur/' + user.idUtilisateur, user, this.jwt());
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/deluser/' + _id, this.jwt());
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            headers.append("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
            headers.append("Access-Control-Allow-Origin", "*");
            headers.append("Access-Control-Expose-Headers", "Authorization");
            headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, ,Content-Type, Accept, Access-Control-Allow-Headers, Authorization");
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