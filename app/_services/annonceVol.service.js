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
var http_2 = require("@angular/http");
var AnnonceVolService = (function () {
    function AnnonceVolService(http, config) {
        this.http = http;
        this.config = config;
    }
    AnnonceVolService.prototype.getmesAnnoncesVol = function (id) {
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('id', id);
        var requestParam = urlSearchParams.toString();
        return this.http.get(this.config.apiUrl + '/MesAnnonceVol?' + requestParam, this.jwt())
            .map(function (res) { return res.json(); });
    };
    AnnonceVolService.prototype.getAnnoncesVol = function () {
        return this.http.get(this.config.apiUrl + '/AnnoncesVol', this.jwt())
            .map(function (res) { return res.json(); });
    };
    AnnonceVolService.prototype.ajouterAnnonceVol = function (heureDepart, dateDepart, paysDepart, aeroportDepart, paysArrivee, aeroportArrivee, id) {
        var body = {
            "heureDepart": heureDepart, "dateDepart": dateDepart, "paysDepart": paysDepart, "aeroportDepart": aeroportDepart,
            "paysArrivee": paysArrivee, "aeroportArrivee": aeroportArrivee
        };
        return this.http.put(this.config.apiUrl + '/AjouterAnnonceVol/' + id, body, this.jwt())
            .map(function (res) { return res.json(); });
    };
    AnnonceVolService.prototype.modifierAnnonceVol = function (id, heureDepart, dateDepart, paysDepart, aeroportDepart, paysArrivee, aeroportArrivee, idUtilisateur) {
        var body = {
            "id": id, "heureDepart": heureDepart, "dateDepart": dateDepart, "paysDepart": paysDepart, "aeroportDepart": aeroportDepart,
            "paysArrivee": paysArrivee, "aeroportArrivee": aeroportArrivee
        };
        return this.http.put(this.config.apiUrl + '/updateAnnonceVol/' + idUtilisateur, body, this.jwt())
            .map(function (res) { return res.json(); });
    };
    AnnonceVolService.prototype.supprimerAnnonceVol = function (id) {
        return this.http.delete(this.config.apiUrl + '/deleteAnnonceVol/' + id, this.jwt());
    };
    AnnonceVolService.prototype.getAnnonceVolById = function (id) {
        return this.http.put(this.config.apiUrl + '/getAnnonceVolById/' + id, this.jwt())
            .map(function (res) { return res.json(); });
    };
    AnnonceVolService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    AnnonceVolService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], AnnonceVolService);
    return AnnonceVolService;
}());
exports.AnnonceVolService = AnnonceVolService;
//# sourceMappingURL=annonceVol.service.js.map