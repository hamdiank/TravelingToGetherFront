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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_config_1 = require("../app.config");
var http_2 = require("@angular/http");
var ReservationService = (function () {
    function ReservationService(http, config) {
        this.http = http;
        this.config = config;
        this.etat = false;
    }
    ReservationService.prototype.reserver = function (idAnnonceCovoi, idUtilisateurReservation) {
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('idAnnonceCovoi', idAnnonceCovoi);
        urlSearchParams.append('idUtilisateurReservation', idUtilisateurReservation);
        urlSearchParams.append('etat', this.etat.toString());
        var body = urlSearchParams.toString();
        return this.http.put(this.config.apiUrl + '/reservation?' + body, body, this.jwt())
            .map(function (res) { return res.json(); });
    };
    ReservationService.prototype.getReservationsByAnnonceCovoi = function (idAnnonceCovoi) {
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('idAnnonceCovoi', idAnnonceCovoi);
        var body = urlSearchParams.toString();
        console.log(body);
        return this.http.get(this.config.apiUrl + '/getReservationsByAnnonceCovoi?' + body, this.jwt())
            .map(function (res) { return res.json(); });
    };
    ///////////////////////////////////
    ReservationService.prototype.getReservationsByUtilisateurReservation = function (idUtilisateur) {
        console.log('reservation service');
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('idUtilisateur', idUtilisateur);
        var body = urlSearchParams.toString();
        console.log(body);
        return this.http.get(this.config.apiUrl + '/getReservationsByUtilisateurReservation?' + body, this.jwt())
            .map(function (res) { return res.json(); });
    };
    ReservationService.prototype.annulerReservation = function (idReservation) {
        return this.http.delete(this.config.apiUrl + '/annulerReservation/' + idReservation, this.jwt());
    };
    ReservationService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    ReservationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], ReservationService);
    return ReservationService;
}());
exports.ReservationService = ReservationService;
//# sourceMappingURL=reservation.service.js.map