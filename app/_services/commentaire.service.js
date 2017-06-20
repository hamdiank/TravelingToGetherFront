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
var CommentaireService = (function () {
    function CommentaireService(http, config) {
        this.http = http;
        this.config = config;
    }
    CommentaireService.prototype.getCommentairesByAnnonce = function (idAnnonce) {
        return this.http.get(this.config.apiUrl + '/commentaire/commentaire/' + idAnnonce, this.jwt())
            .map(function (response) { return response.json(); });
    };
    CommentaireService.prototype.deleteCommentaire = function (id) {
        console.log("" + id);
        return this.http.delete(this.config.apiUrl + '/commentaire/dell/' + id, this.jwt());
    };
    CommentaireService.prototype.addCommentaire = function (text, idAnnonce, id) {
        console.log(text);
        console.log(id);
        console.log(idAnnonce);
        var body = { "text": text, 'id': id };
        return this.http.post(this.config.apiUrl + '/commentaire/add/' + idAnnonce, body, this.jwt())
            .map(function (response) { return response.json(); });
    };
    //////////////////Annonce Vol////////////////////////
    CommentaireService.prototype.addCommentaireAnnonceVol = function (text, idAnnonce, id) {
        console.log(text);
        console.log(id);
        console.log(idAnnonce);
        var body = { "text": text, 'id': id };
        return this.http.post(this.config.apiUrl + '/commentaire/addCommAnnonceVol/' + idAnnonce, body, this.jwt())
            .map(function (response) { return response.json(); });
    };
    CommentaireService.prototype.getCommentairesByAnnonceVol = function (idAnnonce) {
        return this.http.get(this.config.apiUrl + '/commentaire/commentaireAnnonceVol/' + idAnnonce, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ///////////////////////////////////////////////////////////
    //////////////////Annonce Train////////////////////////
    CommentaireService.prototype.addCommentaireAnnonceTrain = function (text, idAnnonce, id) {
        console.log(text);
        console.log(id);
        console.log(idAnnonce);
        var body = { "text": text, 'id': id };
        return this.http.post(this.config.apiUrl + '/commentaire/addCommAnnonceTrain/' + idAnnonce, body, this.jwt())
            .map(function (response) { return response.json(); });
    };
    CommentaireService.prototype.getCommentairesByAnnonceTrain = function (idAnnonce) {
        return this.http.get(this.config.apiUrl + '/commentaire/commentaireAnnonceTrain/' + idAnnonce, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ///////////////////////////////////////////////////////////
    CommentaireService.prototype.jwt = function () {
        // create a uthorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    CommentaireService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], CommentaireService);
    return CommentaireService;
}());
exports.CommentaireService = CommentaireService;
//# sourceMappingURL=commentaire.service.js.map