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
var http_1 = require("@angular/http");
var app_config_1 = require("../app.config");
var CityService = (function () {
    function CityService(http, config) {
        this.http = http;
        this.config = config;
    }
    CityService.prototype.getAll = function () {
        console.log("start api/user eehdf ......");
        return this.http.get(this.config.apiUrl + '/city/all', this.jwt()).map(function (response) { return response.json(); });
    };
    CityService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/city/delCity/' + _id, this.jwt());
    };
    CityService.prototype.update = function (city) {
        return this.http.put(this.config.apiUrl + '/city/updateCity/' + city.idCity, city, this.jwt());
    };
    CityService.prototype.jwt = function () {
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
    CityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], CityService);
    return CityService;
}());
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map