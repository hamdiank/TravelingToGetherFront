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
var AnnonceCovoiService = (function () {
    function AnnonceCovoiService(http, config) {
        this.http = http;
        this.config = config;
    }
    //////////////////////////
    AnnonceCovoiService.prototype.getMesAnnoncesCovoi = function (id) {
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('id', id);
        var body = urlSearchParams.toString();
        console.log(body);
        return this.http.get(this.config.apiUrl + '/maListeAnnonceCovoi?' + body, this.jwt())
            .map(function (res) { return res.json(); });
    };
    /************************************************* */
    AnnonceCovoiService.prototype.getAnnonceCovoi = function (id) {
        var idAnnonceCovoi = id.toString();
        console.log('kkkkkkkkkkkkkkkk');
        return this.http.get(this.config.apiUrl + '/getAnnonceCovoiById/' + idAnnonceCovoi, this.jwt()).map(function (res) { return res.json(); });
    };
    /****************************************************** */
    AnnonceCovoiService.prototype.ajouterAnnonceCovoi = function (heureDepart, dateDepart, paysDepart, villeDepart, paysArrivee, villeArrivee, nombrePlaces, cotisation, cotType, description, id) {
        console.log("qqqqqqqqq");
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('heureDepart', heureDepart);
        urlSearchParams.append('dateDepart', dateDepart);
        console.log(dateDepart);
        urlSearchParams.append('paysDepart', paysDepart);
        urlSearchParams.append('villeDepart', villeDepart);
        urlSearchParams.append('paysArrivee', paysArrivee);
        urlSearchParams.append('villeArrivee', villeArrivee);
        urlSearchParams.append('nombrePlaces', nombrePlaces);
        urlSearchParams.append('cotisation', cotisation);
        urlSearchParams.append('cotType', cotType);
        urlSearchParams.append('description', description);
        urlSearchParams.append('id', id);
        var body = urlSearchParams.toString();
        //let body={"datePublication": datePublication, "dateDepart": dateDepart , "adresseDepart": adresseDepart , "adresseArrivee": adresseArrivee , "nombrePlaces": nombrePlaces , "cotisation": cotisation, "id": id };
        console.log(body);
        return this.http.put(this.config.apiUrl + '/ajoutAnnonceCovoi?' + body, body, this.jwt())
            .map(function (res) { return res.json(); });
    };
    //////////////////////////////////////
    AnnonceCovoiService.prototype.modifierAnnonceCovoi = function (heureDepart, dateDepart, paysDepart, villeDepart, paysArrivee, villeArrivee, nombrePlaces, cotisation, cotType, description, id, idUtilisateur) {
        console.log("i am here");
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('heureDepart', heureDepart);
        urlSearchParams.append('dateDepart', dateDepart);
        console.log(dateDepart);
        urlSearchParams.append('paysDepart', paysDepart);
        urlSearchParams.append('villeDepart', villeDepart);
        urlSearchParams.append('paysArrivee', paysArrivee);
        urlSearchParams.append('villeArrivee', villeArrivee);
        urlSearchParams.append('nombrePlaces', nombrePlaces);
        urlSearchParams.append('cotisation', cotisation);
        urlSearchParams.append('cotType', cotType);
        urlSearchParams.append('description', description);
        urlSearchParams.append('id', id);
        urlSearchParams.append('idUtilisateur', idUtilisateur);
        var body = urlSearchParams.toString();
        console.log(body);
        return this.http.put(this.config.apiUrl + '/updateAnnonceCovoi?' + body, body, this.jwt())
            .map(function (res) { return res.json(); });
    };
    //////////////////////////////////
    AnnonceCovoiService.prototype.getAnnoncesCovoi = function () {
        console.log("annonces covoi affichage ");
        return this.http.get(this.config.apiUrl + '/annonces', this.jwt())
            .map(function (response) { return response.json(); });
    };
    //////////////////////////////////////
    AnnonceCovoiService.prototype.supprimerAnnonceCovoi = function (id) {
        console.log("supprimer annonce covoi");
        return this.http.delete(this.config.apiUrl + '/deleteAnnonceCovoi/' + id, this.jwt())
            .map(function (response) { return response.json(); });
    };
    AnnonceCovoiService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    AnnonceCovoiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], AnnonceCovoiService);
    return AnnonceCovoiService;
}());
exports.AnnonceCovoiService = AnnonceCovoiService;
//# sourceMappingURL=annonceCovoi.service.js.map