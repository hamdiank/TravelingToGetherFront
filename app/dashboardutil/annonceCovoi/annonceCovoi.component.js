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
var annonceCovoi_service_1 = require("../../_services/annonceCovoi.service");
var AnnonceCovoiComponent = (function () {
    function AnnonceCovoiComponent(annonceCovoiService) {
        this.annonceCovoiService = annonceCovoiService;
    }
    AnnonceCovoiComponent.prototype.getAnnoncesCovoi = function () {
        var _this = this;
        this.annonceCovoiService.getAnnoncesCovoi().subscribe(function (annoncesCovoi) {
            _this.annoncesCovoi = annoncesCovoi;
        });
        console.log("aaaaaaaaaaa");
        /*   console.log (localStorage.getItem('currentUser'));
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    console.log(currentUser)
                      this.id=currentUser;
                   //   console.log(currentUser.json().idUtilisateur)   */
    };
    AnnonceCovoiComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('currentUser'));
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.id = currentUser.idUtilisateur;
        console.log(currentUser.idUtilisateur);
        console.log("asx");
        this.getAnnoncesCovoi();
    };
    AnnonceCovoiComponent = __decorate([
        core_1.Component({
            selector: 'annonce-covoi-cmp',
            moduleId: module.id,
            templateUrl: 'annonceCovoi.component.html'
        }), 
        __metadata('design:paramtypes', [annonceCovoi_service_1.AnnonceCovoiService])
    ], AnnonceCovoiComponent);
    return AnnonceCovoiComponent;
}());
exports.AnnonceCovoiComponent = AnnonceCovoiComponent;
//# sourceMappingURL=annonceCovoi.component.js.map