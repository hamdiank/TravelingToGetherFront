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
var router_1 = require("@angular/router");
var user_service_1 = require("../../_services/user.service");
var annonceVol_service_1 = require("../../_services/annonceVol.service");
var AnnonceVolDetailComponent = (function () {
    function AnnonceVolDetailComponent(annonceVolService, route, userService) {
        var _this = this;
        this.annonceVolService = annonceVolService;
        this.route = route;
        this.userService = userService;
        this.annonceVol = {};
        this.utilisateur = {};
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log(_this.id);
            console.log('dddddddd');
        });
        console.log('I am here ' + this.id);
        this.annonceVolService.getAnnonceVolById(this.id.toString()).subscribe(function (annonceVol) {
            _this.annonceVol = annonceVol,
                _this.utilisateur = annonceVol.utilisateur;
        });
    }
    AnnonceVolDetailComponent.prototype.ngOnInit = function () {
        this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    };
    AnnonceVolDetailComponent = __decorate([
        core_1.Component({
            selector: 'annonce-vol-detail-cmp',
            moduleId: module.id,
            templateUrl: 'annonceVolDetail.component.html',
            providers: [annonceVol_service_1.AnnonceVolService]
        }), 
        __metadata('design:paramtypes', [annonceVol_service_1.AnnonceVolService, router_1.ActivatedRoute, user_service_1.UserService])
    ], AnnonceVolDetailComponent);
    return AnnonceVolDetailComponent;
}());
exports.AnnonceVolDetailComponent = AnnonceVolDetailComponent;
//# sourceMappingURL=annonceVolDetail.component.js.map