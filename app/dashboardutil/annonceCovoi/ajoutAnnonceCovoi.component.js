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
var dataService_1 = require("./dataService");
var pays_service_1 = require("../../_services/pays.service");
var city_service_1 = require("../../_services/city.service");
var annonceCovoi_service_1 = require("../../_services/annonceCovoi.service");
var AjoutAnnonceCovoiComponent = (function () {
    ///////////////////////////////////////////////////////////////////
    function AjoutAnnonceCovoiComponent(paysService, cityService, annonceCovoiService) {
        var _this = this;
        this.paysService = paysService;
        this.cityService = cityService;
        this.annonceCovoiService = annonceCovoiService;
        this.selectedPays = {};
        this.model = {};
        this.val4 = 100;
        this.selectedPays.idPays = '0';
        this.paysService.getAll().subscribe(function (pays) {
            _this.pays = pays;
        });
        console.log(JSON.stringify(this.pays));
    }
    ///////////////////////////////////////////////////////////////////
    AjoutAnnonceCovoiComponent.prototype.onSelect1 = function (idPays1) {
        var _this = this;
        console.log('idPaysDepart' + idPays1);
        console.log('idPaysDepartModel' + this.model.paysDepart);
        console.log('idVilleDepart' + this.model.villeDepart);
        this.paysService.getById(idPays1).subscribe(function (onePays) {
            _this.onePays = onePays, _this.cities = onePays.cities, _this.paysDepart = onePays.nom;
        });
        console.log(JSON.stringify(this.cities));
    };
    AjoutAnnonceCovoiComponent.prototype.onSelect2 = function (idPays2) {
        var _this = this;
        console.log('idPaysArrivee' + idPays2);
        console.log('idPaysArriveeModel' + this.model.paysDepart);
        console.log('idVilleArrivee' + this.model.villeArrivee);
        this.paysService.getById(idPays2).subscribe(function (onePays2) {
            _this.onePays2 = onePays2, _this.cities2 = onePays2.cities, _this.paysArrivee = onePays2.nom;
        });
        console.log(JSON.stringify(this.cities));
    };
    ///////////////////////////////////////////////////////////////
    AjoutAnnonceCovoiComponent.prototype.onInput = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    AjoutAnnonceCovoiComponent.prototype.onInput2 = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    AjoutAnnonceCovoiComponent.prototype.onInputHeure = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    AjoutAnnonceCovoiComponent.prototype.onInputMinutes = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    AjoutAnnonceCovoiComponent.prototype.onInputSpin = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    ///////////////////////////////////////////////////////////////
    AjoutAnnonceCovoiComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("aaaaaaaaaaaa");
        console.log(this.model.spin);
        console.log(this.model.minutes);
        //console.log(this.user);
        //this.model.heureDepart= this.model.heure +':'+ this.model.minutes;
        this.model.paysDepart = this.paysDepart;
        this.model.paysArrivee = this.paysArrivee;
        this.annonceCovoiService.ajouterAnnonceCovoi(this.model.heureDepart, this.model.dateDepart, this.model.paysDepart, this.model.villeDepart, this.model.paysArrivee, this.model.villeArrivee, this.model.nombrePlaces, this.model.cotisation, this.id)
            .subscribe(function (data) {
            console.log("model=>" + _this.model.dateDepart);
        });
    };
    ///////////////////////////////////////////////////////////////
    AjoutAnnonceCovoiComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
        console.log("ngOnInit");
    };
    AjoutAnnonceCovoiComponent = __decorate([
        core_1.Component({
            selector: 'ajout-annonce-covoi-cmp',
            moduleId: module.id,
            templateUrl: 'ajoutAnnonceCovoi.component.html',
            providers: [dataService_1.DataService, annonceCovoi_service_1.AnnonceCovoiService],
        }), 
        __metadata('design:paramtypes', [pays_service_1.PaysService, city_service_1.CityService, annonceCovoi_service_1.AnnonceCovoiService])
    ], AjoutAnnonceCovoiComponent);
    return AjoutAnnonceCovoiComponent;
}());
exports.AjoutAnnonceCovoiComponent = AjoutAnnonceCovoiComponent;
//# sourceMappingURL=ajoutAnnonceCovoi.component.js.map