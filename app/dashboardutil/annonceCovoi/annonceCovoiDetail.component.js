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
var AnnonceCovoiDetailComponent = (function () {
    function AnnonceCovoiDetailComponent(annonceCovoiService, route) {
        this.annonceCovoiService = annonceCovoiService;
        this.route = route;
        this.annonceCovoi = {};
    }
    AnnonceCovoiDetailComponent.prototype.getAnnonceCovoi = function () {
        var _this = this;
        console.log('I am here ' + this.id);
        this.annonceCovoiService.getAnnonceCovoi(this.id).subscribe(function (annonceCovoi) {
            _this.annonceCovoi = annonceCovoi;
        });
    };
    AnnonceCovoiDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log(_this.id);
            console.log('dddddddd');
            // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.getAnnonceCovoi();
        console.log(JSON.stringify(this.annonceCovoi));
        /* this.route.params
       .switchMap((params: Params) => this.annonceCovoiService.getAnnonceCovoi(+params['id']))
       .subscribe( annonceCovoi => { this.annonceCovoi = annonceCovoi});
         this.getAnnonceCovoi();
         console.log(typeof(this.annonceCovoi))
         console.log(JSON.stringify(this.annonceCovoi));*/
    };
    AnnonceCovoiDetailComponent = __decorate([
        core_1.Component({
            selector: 'annonce-covoi-detail-cmp',
            moduleId: module.id,
            templateUrl: 'annonceCovoiDetail.component.html',
            providers: [annonceCovoi_service_1.AnnonceCovoiService]
        }), 
        __metadata('design:paramtypes', [annonceCovoi_service_1.AnnonceCovoiService, router_1.ActivatedRoute])
    ], AnnonceCovoiDetailComponent);
    return AnnonceCovoiDetailComponent;
}());
exports.AnnonceCovoiDetailComponent = AnnonceCovoiDetailComponent;
//# sourceMappingURL=annonceCovoiDetail.component.js.map