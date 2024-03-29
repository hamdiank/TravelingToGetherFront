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
var PaysService = (function () {
    function PaysService(http, config) {
        this.http = http;
        this.config = config;
    }
    PaysService.prototype.getAll = function () {
        console.log("start api/pays  ......" + this.jwt());
        return this.http.get(this.config.apiUrl + '/admin/pays/all', this.jwt()).map(function (response) { return response.json(); });
    };
    PaysService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/admin/pays/delPays/' + _id, this.jwt());
    };
    PaysService.prototype.update = function (pays, v, a, s) {
        return this.http.put(this.config.apiUrl + '/admin/pays/updatePays/' + pays.idPays + '/' + v + '/' + a + '/' + s, this.jwt());
    };
    PaysService.prototype.updateNom = function (pays) {
        console.log(pays.nom);
        return this.http.put(this.config.apiUrl + '/admin/pays/renomerPays/' + pays.idPays, pays, this.jwt());
    };
    PaysService.prototype.add = function (nomPays) {
        return this.http.post(this.config.apiUrl + '/admin/pays/addPays/' + nomPays, this.jwt());
    };
    PaysService.prototype.getById = function (id) {
        console.log("i am here getById");
        return this.http.get(this.config.apiUrl + '/admin/pays/pays/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    PaysService.prototype.getByCity = function (nom) {
        return this.http.get(this.config.apiUrl + '/admin/pays/paysByCity/' + nom, this.jwt()).map(function (response) { return response.json(); });
    };
    PaysService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    PaysService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], PaysService);
    return PaysService;
}());
exports.PaysService = PaysService;
//# sourceMappingURL=pays.service.js.map