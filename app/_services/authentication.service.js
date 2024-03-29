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
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var angular2_jwt_1 = require('angular2-jwt');
var app_config_1 = require('../app.config');
var AuthenticationService = (function () {
    function AuthenticationService(router, http, config) {
        this.router = router;
        this.http = http;
        this.config = config;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        console.log(headers);
        var body = {
            "login": username,
            "motDePasse": password
        };
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.config.apiUrl + '/login', body, options)
            .map(function (response) {
            console.log("start kkkk");
            var x = JSON.parse(JSON.stringify(response));
            console.log(x);
            // to load the id of our user
            // login successful if there's a jwt token in the response
            var token = x._body;
            console.log("rrrrrrrggghgjhj");
            //  console.log(token);
            //console.log(JSON.stringify(user));
            if (token) {
                //get the user id
                //  console.log("decooooded: "+this.jwtHelper.decodeToken(token).role) ;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log(token);
                localStorage.setItem('currentToken', JSON.stringify(token));
                localStorage.setItem('currentUserId', _this.jwtHelper.decodeToken(token).userId);
                localStorage.setItem('currentUserRole', _this.jwtHelper.decodeToken(token).role);
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentToken');
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('currentUserRole');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, app_config_1.AppConfig])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map