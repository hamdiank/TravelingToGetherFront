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
var router_1 = require("@angular/router");
var MesAnnoncesCovoiComponent = (function () {
    function MesAnnoncesCovoiComponent(annonceCovoiService, router) {
        this.annonceCovoiService = annonceCovoiService;
        this.router = router;
    }
    MesAnnoncesCovoiComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
    };
    MesAnnoncesCovoiComponent = __decorate([
        core_1.Component({
            selector: 'mes-annonces-covoi-cmp',
            moduleId: module.id,
            templateUrl: 'mesAnnoncesCovoi.component.html',
            providers: [annonceCovoi_service_1.AnnonceCovoiService]
        }), 
        __metadata('design:paramtypes', [annonceCovoi_service_1.AnnonceCovoiService, router_1.Router])
    ], MesAnnoncesCovoiComponent);
    return MesAnnoncesCovoiComponent;
}());
exports.MesAnnoncesCovoiComponent = MesAnnoncesCovoiComponent;
//# sourceMappingURL=mesAnnoncesCovoi.component.js.map