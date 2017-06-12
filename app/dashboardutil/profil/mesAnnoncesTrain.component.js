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
var pays_service_1 = require("../../_services/pays.service");
var city_service_1 = require("../../_services/city.service");
var reservation_service_1 = require("../../_services/reservation.service");
var annonceVol_service_1 = require("../../_services/annonceVol.service");
var annonceTrain_service_1 = require("../../_services/annonceTrain.service");
var MesAnnoncesTrainComponent = (function () {
    function MesAnnoncesTrainComponent(annonceVolService, annonceCovoiService, router, paysService, cityService, reservationService, annonceTrainService) {
        var _this = this;
        this.annonceVolService = annonceVolService;
        this.annonceCovoiService = annonceCovoiService;
        this.router = router;
        this.paysService = paysService;
        this.cityService = cityService;
        this.reservationService = reservationService;
        this.annonceTrainService = annonceTrainService;
        this.selectedPays = {};
        this.testPaysDepart = false;
        this.testStationTrainDepart = false;
        this.testPaysArrivee = false;
        this.testStationTrainArrivee = false;
        ////////////////////////////////////////////
        this.model = {};
        this.selected = {};
        ///////////////////////////////////////
        this.mesAnnoncesTrain = [];
        this.selectedPays.idPays = '0';
        this.paysService.getAll().subscribe(function (pays) {
            _this.pays = pays;
        });
        console.log(JSON.stringify(this.pays));
    }
    /////////////////////////////////////////////////////
    MesAnnoncesTrainComponent.prototype.onSelect1 = function (idPays1) {
        var _this = this;
        console.log('idPaysDepart' + idPays1);
        console.log('idPaysDepartModel' + this.model.paysDepart);
        console.log('idVilleDepart' + this.model.aeroportDepart);
        this.paysService.getById(idPays1).subscribe(function (onePays) {
            _this.onePays = onePays, _this.cities = onePays.cities, _this.paysDepart = onePays.nom,
                _this.aeroports = onePays.aeroports, _this.stations = onePays.stations;
        });
        console.log(JSON.stringify(this.aeroports));
    };
    MesAnnoncesTrainComponent.prototype.onSelect2 = function (idPays2) {
        var _this = this;
        console.log('idPaysArrivee' + idPays2);
        console.log('idPaysArriveeModel' + this.model.paysDepart);
        console.log('idVilleArrivee' + this.model.villeArrivee);
        this.paysService.getById(idPays2).subscribe(function (onePays2) {
            _this.onePays2 = onePays2, _this.cities2 = onePays2.cities, _this.paysArrivee = onePays2.nom,
                _this.aeroports2 = onePays2.aeroports, _this.stations2 = onePays2.stations;
        });
        console.log(JSON.stringify(this.aeroports2));
    };
    MesAnnoncesTrainComponent.prototype.changePaysDepart = function () {
        this.testPaysDepart = true;
    };
    MesAnnoncesTrainComponent.prototype.changeAeroportDepart = function () {
        this.testStationTrainDepart = true;
    };
    MesAnnoncesTrainComponent.prototype.changePaysArrivee = function () {
        this.testPaysArrivee = true;
    };
    MesAnnoncesTrainComponent.prototype.changeAeroportArrivee = function () {
        this.testStationTrainArrivee = true;
    };
    ////////////////////////////////////////////////////
    MesAnnoncesTrainComponent.prototype.onClick = function (annonceTrain) {
        this.testPaysDepart = false;
        this.testStationTrainArrivee = false;
        this.testPaysArrivee = false;
        this.testStationTrainArrivee = false;
        console.log(annonceTrain);
        this.selected = annonceTrain;
        this.model = this.selected;
        console.log(this.model.id);
        console.log("jjjjjjjjjj");
        console.log(this.selected);
    };
    MesAnnoncesTrainComponent.prototype.getMesAnnoncesTrain = function () {
        var _this = this;
        this.annonceTrainService.getmesAnnoncesTrain(this.idUtilisateur).subscribe(function (mesAnnoncesTrain) {
            _this.mesAnnoncesTrain = mesAnnoncesTrain;
        });
    };
    MesAnnoncesTrainComponent.prototype.modifierAnnonceTrain = function () {
        //  let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        //  this.idUtilisateur=currentUserId;
        var _this = this;
        if (this.testPaysDepart == true) {
            this.model.paysDepart = this.paysDepart;
        }
        if (this.testPaysArrivee == true) {
            this.model.paysArrivee = this.paysArrivee;
        }
        // this.model.paysDepart= this.paysDepart;
        //this.model.paysArrivee= this.paysArrivee;
        console.log(typeof (this.model.paysDepart));
        this.annonceVolService.modifierAnnonceVol(this.model.id, this.model.heureDepart, this.model.dateDepart, this.model.paysDepart, this.model.stationTrainDepart, this.model.paysArrivee, this.model.stationTrainArrivee, this.idUtilisateur)
            .subscribe(function (data) {
            _this.router.navigate(['dashboardutil/MesAnnoncesVol']);
        });
    };
    MesAnnoncesTrainComponent.prototype.supprimerAnnonceVol = function () {
        var _this = this;
        this.annonceVolService.supprimerAnnonceVol(this.model.id)
            .subscribe(function (data) {
            _this.router.navigate(['dashboardutil/MesAnnoncesVol']);
        });
    };
    MesAnnoncesTrainComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.idUtilisateur = currentUserId;
        console.log(this.id);
        this.getMesAnnoncesTrain();
    };
    MesAnnoncesTrainComponent = __decorate([
        core_1.Component({
            selector: 'mes-annonces-trin-cmp',
            moduleId: module.id,
            templateUrl: 'mesAnnoncesTrain.component.html',
            providers: [annonceVol_service_1.AnnonceVolService],
            styleUrls: ['mesAnnoncesTrain.component.css']
        }), 
        __metadata('design:paramtypes', [annonceVol_service_1.AnnonceVolService, annonceCovoi_service_1.AnnonceCovoiService, router_1.Router, pays_service_1.PaysService, city_service_1.CityService, reservation_service_1.ReservationService, annonceTrain_service_1.AnnonceTrainService])
    ], MesAnnoncesTrainComponent);
    return MesAnnoncesTrainComponent;
}());
exports.MesAnnoncesTrainComponent = MesAnnoncesTrainComponent;
//# sourceMappingURL=mesAnnoncesTrain.component.js.map