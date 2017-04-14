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
var index_1 = require("../../_services/index");
var avion_service_1 = require("../../_services/avion.service");
var ParametrageComponent = (function () {
    function ParametrageComponent(paysService, pagerService, avionService) {
        this.paysService = paysService;
        this.pagerService = pagerService;
        this.avionService = avionService;
        this.model = {};
        // pager object
        this.pager = {};
    }
    ParametrageComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/material-dashboard.js');
        this.ListPays();
        this.getAvions();
    };
    ParametrageComponent.prototype.ListPays = function () {
        var _this = this;
        this.paysService.getAll().
            subscribe(function (pays) {
            _this.pays = pays;
            // initialize to page 1
            _this.setPage(1);
            console.log(pays);
        }, function (error) {
            console.log(error);
        });
    };
    ParametrageComponent.prototype.supprimer = function (id) {
        var _this = this;
        console.log(id);
        this.paysService.delete(id).subscribe(function (resultat) {
            _this.ListPays();
        });
    };
    ParametrageComponent.prototype.modifier = function () {
        var _this = this;
        console.log(this.model.nom);
        this.paysM.nom = this.model.nom;
        this.paysService.update(this.paysM).subscribe(function (result) {
            _this.ListPays();
        });
    };
    ParametrageComponent.prototype.getPays = function (pays) {
        this.paysM = pays;
        this.nomM = this.paysM.nom;
    };
    ParametrageComponent.prototype.setPage = function (page) {
        console.log();
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.pays.length, page);
        // get current page of items
        this.pagedItems = this.pays.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ParametrageComponent.prototype.getAvions = function () {
        var _this = this;
        this.avionService.getAvions().subscribe(function (avions) {
            _this.avions = avions;
            console.log("aaaaaaaaaaa");
        });
    };
    //    console.log(this.avions);
    //    console.log(typeof(this.avions));
    ParametrageComponent.prototype.delete = function (avion) {
        console.log(typeof (avion.id));
        this.avionService.delete(avion.id);
        console.log(avion.type + "supprimé!!!!!!");
    };
    ParametrageComponent = __decorate([
        core_1.Component({
            selector: 'parametrage-cmp',
            moduleId: module.id,
            templateUrl: 'parametrage.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.PaysService, index_1.PagerService, avion_service_1.AvionService])
    ], ParametrageComponent);
    return ParametrageComponent;
}());
exports.ParametrageComponent = ParametrageComponent;
//# sourceMappingURL=parametrage.component.js.map