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
var MesAnnoncesVolComponent = (function () {
    function MesAnnoncesVolComponent(annonceVolService, annonceCovoiService, router, paysService, cityService, reservationService) {
        var _this = this;
        this.annonceVolService = annonceVolService;
        this.annonceCovoiService = annonceCovoiService;
        this.router = router;
        this.paysService = paysService;
        this.cityService = cityService;
        this.reservationService = reservationService;
        this.selectedPays = {};
        this.testPaysDepart = false;
        this.testAeroportDepart = false;
        this.testPaysArrivee = false;
        this.testAeroportArrivee = false;
        ////////////////////////////////////////////
        this.model = {};
        this.selected = {};
        ///////////////////////////////////////
        this.mesAnnoncesVol = [];
        this.selectedPays.idPays = '0';
        this.paysService.getAll().subscribe(function (pays) {
            _this.pays = pays;
        });
        console.log(JSON.stringify(this.pays));
    }
    /////////////////////////////////////////////////////
    MesAnnoncesVolComponent.prototype.onSelect1 = function (idPays1) {
        var _this = this;
        console.log('idPaysDepart' + idPays1);
        console.log('idPaysDepartModel' + this.model.paysDepart);
        console.log('idVilleDepart' + this.model.aeroportDepart);
        this.paysService.getById(idPays1).subscribe(function (onePays) {
            _this.onePays = onePays, _this.cities = onePays.cities, _this.paysDepart = onePays.nom,
                _this.aeroports = onePays.aeroports;
        });
        console.log(JSON.stringify(this.aeroports));
    };
    MesAnnoncesVolComponent.prototype.onSelect2 = function (idPays2) {
        var _this = this;
        console.log('idPaysArrivee' + idPays2);
        console.log('idPaysArriveeModel' + this.model.paysDepart);
        console.log('idVilleArrivee' + this.model.villeArrivee);
        this.paysService.getById(idPays2).subscribe(function (onePays2) {
            _this.onePays2 = onePays2, _this.cities2 = onePays2.cities, _this.paysArrivee = onePays2.nom,
                _this.aeroports2 = onePays2.aeroports;
        });
        console.log(JSON.stringify(this.aeroports2));
    };
    MesAnnoncesVolComponent.prototype.changePaysDepart = function () {
        this.testPaysDepart = true;
    };
    MesAnnoncesVolComponent.prototype.changeAeroportDepart = function () {
        this.testAeroportDepart = true;
    };
    MesAnnoncesVolComponent.prototype.changePaysArrivee = function () {
        this.testPaysArrivee = true;
    };
    MesAnnoncesVolComponent.prototype.changeAeroportArrivee = function () {
        this.testAeroportArrivee = true;
    };
    ////////////////////////////////////////////////////
    MesAnnoncesVolComponent.prototype.onClick = function (annonceVol) {
        this.testPaysDepart = false;
        this.testAeroportArrivee = false;
        this.testPaysArrivee = false;
        this.testAeroportArrivee = false;
        console.log(annonceVol);
        this.selected = annonceVol;
        this.model = this.selected;
        console.log(this.model.id);
        console.log("jjjjjjjjjj");
        console.log(this.selected);
    };
    MesAnnoncesVolComponent.prototype.getMesAnnonceVol = function () {
        var _this = this;
        this.annonceVolService.getmesAnnoncesVol(this.idUtilisateur).subscribe(function (mesAnnoncesVol) {
            _this.mesAnnoncesVol = mesAnnoncesVol;
        });
    };
    MesAnnoncesVolComponent.prototype.modifierAnnonceVol = function () {
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
        this.annonceVolService.modifierAnnonceVol(this.model.id, this.model.heureDepart, this.model.dateDepart, this.model.paysDepart, this.model.aeroportDepart, this.model.paysArrivee, this.model.aeroportArrivee, this.idUtilisateur)
            .subscribe(function (data) {
            _this.router.navigate(['dashboardutil/MesAnnoncesVol']);
        });
    };
    MesAnnoncesVolComponent.prototype.supprimerAnnonceVol = function () {
        var _this = this;
        this.annonceVolService.supprimerAnnonceVol(this.model.id)
            .subscribe(function (data) {
            _this.router.navigate(['dashboardutil/MesAnnoncesVol']);
        });
    };
    MesAnnoncesVolComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.idUtilisateur = currentUserId;
        console.log(this.id);
        this.getMesAnnonceVol();
    };
    MesAnnoncesVolComponent = __decorate([
        core_1.Component({
            selector: 'mes-annonces-vol-cmp',
            moduleId: module.id,
            templateUrl: 'mesAnnoncesVol.component.html',
            providers: [annonceVol_service_1.AnnonceVolService],
            styleUrls: ['mesAnnoncesVol.component.css']
        }), 
        __metadata('design:paramtypes', [annonceVol_service_1.AnnonceVolService, annonceCovoi_service_1.AnnonceCovoiService, router_1.Router, pays_service_1.PaysService, city_service_1.CityService, reservation_service_1.ReservationService])
    ], MesAnnoncesVolComponent);
    return MesAnnoncesVolComponent;
}());
exports.MesAnnoncesVolComponent = MesAnnoncesVolComponent;
//# sourceMappingURL=mesAnnoncesVol.component.js.map