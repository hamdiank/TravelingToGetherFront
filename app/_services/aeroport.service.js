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
var AeroportService = (function () {
    function AeroportService(http, config) {
        this.http = http;
        this.config = config;
    }
    AeroportService.prototype.getAll = function () {
        console.log("start api/Aero ......");
        return this.http.get(this.config.apiUrl + '/aeroport/all', this.jwt()).map(function (response) { return response.json(); });
    };
    AeroportService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/aeroport/aeroportDel/' + _id, this.jwt());
    };
    AeroportService.prototype.update = function (aeroport) {
        return this.http.put(this.config.apiUrl + '/aeroport/updateAeroport/' + aeroport.idAeroport, aeroport, this.jwt());
    };
    AeroportService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    AeroportService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], AeroportService);
    return AeroportService;
}());
exports.AeroportService = AeroportService;
//# sourceMappingURL=aeroport.service.js.map