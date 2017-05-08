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
var app_config_1 = require('../../app.config');
var DataService = (function () {
    function DataService(http, config) {
        this.http = http;
        this.config = config;
    }
    DataService.prototype.getAll = function () {
        console.log('enter 65');
        return this.http.get(this.config.apiUrl + '/message/all', this.jwt())
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.jwt = function () {
        // create a uthorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentToken'));
        if (currentUser) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map