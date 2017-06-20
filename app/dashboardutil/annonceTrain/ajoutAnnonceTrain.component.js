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
var pays_service_1 = require("../../_services/pays.service");
var city_service_1 = require("../../_services/city.service");
var annonceVol_service_1 = require("../../_services/annonceVol.service");
var annonceTrain_service_1 = require("../../_services/annonceTrain.service");
var router_1 = require("@angular/router");
var AjoutAnnonceTrainComponent = (function () {
    ///////////////////////////////////////////////////////////////////
    function AjoutAnnonceTrainComponent(annonceTrainService, paysService, cityService, annonceVolService, router) {
        var _this = this;
        this.annonceTrainService = annonceTrainService;
        this.paysService = paysService;
        this.cityService = cityService;
        this.annonceVolService = annonceVolService;
        this.router = router;
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
    AjoutAnnonceTrainComponent.prototype.onSelect1 = function (idPays1) {
        var _this = this;
        console.log('idPaysDepart' + idPays1);
        console.log('idPaysDepartModel' + this.model.paysDepart);
        console.log('idVilleDepart' + this.model.villeDepart);
        this.paysService.getById(idPays1).subscribe(function (onePays) {
            _this.onePays = onePays, _this.cities = onePays.cities, _this.paysDepart = onePays.nom,
                _this.aeroports = onePays.aeroports, _this.stations = onePays.stations;
        });
        console.log(JSON.stringify(this.cities));
    };
    AjoutAnnonceTrainComponent.prototype.onSelect2 = function (idPays2) {
        var _this = this;
        console.log('idPaysArrivee' + idPays2);
        console.log('idPaysArriveeModel' + this.model.paysDepart);
        console.log('idVilleArrivee' + this.model.villeArrivee);
        this.paysService.getById(idPays2).subscribe(function (onePays2) {
            _this.onePays2 = onePays2, _this.cities2 = onePays2.cities, _this.paysArrivee = onePays2.nom,
                _this.aeroports2 = onePays2.aeroports, _this.stations2 = onePays2.stations;
        });
        console.log(JSON.stringify(this.cities));
    };
    ///////////////////////////////////////////////////////////////
    AjoutAnnonceTrainComponent.prototype.onInput = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    AjoutAnnonceTrainComponent.prototype.onInput2 = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    AjoutAnnonceTrainComponent.prototype.onInputHeure = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    AjoutAnnonceTrainComponent.prototype.onInputMinutes = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    AjoutAnnonceTrainComponent.prototype.onInputSpin = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    ///////////////////////////////////////////////////////////////
    AjoutAnnonceTrainComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("aaaaaaaaaaaa");
        // console.log(this.model.spin);
        //  console.log(this.model.minutes);
        //console.log(this.user);
        //this.model.heureDepart= this.model.heure +':'+ this.model.minutes;
        this.model.paysDepart = this.paysDepart;
        this.model.paysArrivee = this.paysArrivee;
        this.annonceTrainService.ajouterAnnonceTrain(this.model.heureDepart, this.model.dateDepart, this.model.paysDepart, this.model.stationDepart, this.model.paysArrivee, this.model.stationArrivee, this.id)
            .subscribe(function (data) {
            console.log("model=>" + _this.model.dateDepart);
            console.log("model=>" + _this.model.stationDepart);
            console.log("model=>" + _this.model.stationArrivee);
            _this.router.navigate(['/dashboardutil/AnnonceVol']);
        });
    };
    ///////////////////////////////////////////////////////////////
    AjoutAnnonceTrainComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
        console.log("ngOnInit");
    };
    AjoutAnnonceTrainComponent = __decorate([
        core_1.Component({
            selector: 'ajout-annonce-train-cmp',
            moduleId: module.id,
            templateUrl: 'ajoutAnnonceTrain.component.html',
            providers: [annonceTrain_service_1.AnnonceTrainService, annonceVol_service_1.AnnonceVolService]
        }), 
        __metadata('design:paramtypes', [annonceTrain_service_1.AnnonceTrainService, pays_service_1.PaysService, city_service_1.CityService, annonceVol_service_1.AnnonceVolService, router_1.Router])
    ], AjoutAnnonceTrainComponent);
    return AjoutAnnonceTrainComponent;
}());
exports.AjoutAnnonceTrainComponent = AjoutAnnonceTrainComponent;
//# sourceMappingURL=ajoutAnnonceTrain.component.js.map