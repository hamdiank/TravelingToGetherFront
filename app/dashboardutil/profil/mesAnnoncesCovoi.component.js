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
var alert_service_1 = require("../../_services/alert.service");
var MesAnnoncesCovoiComponent = (function () {
    function MesAnnoncesCovoiComponent(annonceCovoiService, router, paysService, cityService, reservationService, alertService) {
        var _this = this;
        this.annonceCovoiService = annonceCovoiService;
        this.router = router;
        this.paysService = paysService;
        this.cityService = cityService;
        this.reservationService = reservationService;
        this.alertService = alertService;
        this.accepted = false;
        this.refused = false;
        this.selectedPays = {};
        this.testPaysDepart = false;
        this.testVilleDepart = false;
        this.testPaysArrivee = false;
        this.testVilleArrivee = false;
        ///////////////////////////////////////////
        ////////////////////////////////////////////
        this.model = {};
        this.selected = {};
        this.selectedPays.idPays = '0';
        this.paysService.getAll().subscribe(function (pays) {
            _this.pays = pays;
        });
        console.log(JSON.stringify(this.pays));
    }
    /////////////////////////////////////////////////////
    MesAnnoncesCovoiComponent.prototype.onSelect1 = function (idPays1) {
        var _this = this;
        //this.model.paysDepart= idPays1;
        console.log('idPaysDepart' + idPays1);
        console.log('idPaysDepartModel' + this.model.paysDepart);
        console.log('idVilleDepart' + this.model.villeDepart);
        this.paysService.getById(idPays1).subscribe(function (onePays) {
            _this.onePays = onePays, _this.cities = onePays.cities, _this.paysDepart = onePays.nom;
        });
        console.log(JSON.stringify(this.cities));
    };
    MesAnnoncesCovoiComponent.prototype.onSelect2 = function (idPays2) {
        var _this = this;
        console.log('idPaysArrivee' + idPays2);
        console.log('idPaysArriveeModel' + this.model.paysDepart);
        console.log('idVilleArrivee' + this.model.villeArrivee);
        this.paysService.getById(idPays2).subscribe(function (onePays2) {
            _this.onePays2 = onePays2, _this.cities2 = onePays2.cities, _this.paysArrivee = onePays2.nom;
        });
        console.log(JSON.stringify(this.cities));
    };
    MesAnnoncesCovoiComponent.prototype.changePaysDepart = function () {
        this.testPaysDepart = true;
    };
    MesAnnoncesCovoiComponent.prototype.changeVilleDepart = function () {
        this.testVilleDepart = true;
    };
    MesAnnoncesCovoiComponent.prototype.changePaysArrivee = function () {
        this.testPaysArrivee = true;
    };
    MesAnnoncesCovoiComponent.prototype.changeVilleArrivee = function () {
        this.testVilleArrivee = true;
    };
    ////////////////////////////////////////////////////
    MesAnnoncesCovoiComponent.prototype.getMesAnnoncesCovoi = function () {
        var _this = this;
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(typeof (this.id) + "hhhhh");
        this.annonceCovoiService.getMesAnnoncesCovoi(this.id).subscribe(function (annoncesCovoi) {
            _this.annoncesCovoi = annoncesCovoi;
        });
    };
    MesAnnoncesCovoiComponent.prototype.onClick = function (annonceCovoi) {
        this.testPaysDepart = false;
        this.testVilleArrivee = false;
        this.testPaysArrivee = false;
        this.testVilleArrivee = false;
        console.log(annonceCovoi);
        this.selected = annonceCovoi;
        this.model = this.selected;
        console.log(this.model.id);
        console.log("jjjjjjjjjj");
        console.log(this.selected);
        this.getReservationsByAnnonceCovoi();
    };
    MesAnnoncesCovoiComponent.prototype.onClickReservation = function (reservation) {
        this.idReservation = reservation.idReservation;
        console.log("5555555" + this.idReservation + typeof (this.idReservation));
    };
    ///////////////// Get Reservation by AnnonceCovoi///////////////
    MesAnnoncesCovoiComponent.prototype.getReservationsByAnnonceCovoi = function () {
        var _this = this;
        this.reservationService.getReservationsByAnnonceCovoi(this.selected.id)
            .subscribe(function (reservations) {
            _this.reservations = reservations, console.log(_this.reservations);
        });
    };
    ////////////////////////////////////////////////////////////////
    ///////////////// Modifier Annonce Covoi ///////////////////////
    MesAnnoncesCovoiComponent.prototype.modifierAnnonceCovoi = function () {
        var _this = this;
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.idUtilisateur = currentUserId;
        this.datePublication = "26/04/2017";
        if (this.testPaysDepart == true) {
            this.model.paysDepart = this.paysDepart;
        }
        if (this.testPaysArrivee == true) {
            this.model.paysArrivee = this.paysArrivee;
        }
        // this.model.paysDepart= this.paysDepart;
        //this.model.paysArrivee= this.paysArrivee;
        console.log(typeof (this.model.paysDepart));
        this.annonceCovoiService.modifierAnnonceCovoi(this.model.heureDepart, this.model.dateDepart, this.model.paysDepart, this.model.villeDepart, this.model.paysArrivee, this.model.villeArrivee, this.model.nombrePlaces, this.model.cotisation, this.model.id, this.idUtilisateur)
            .subscribe(function (data) {
            _this.router.navigate(['dashboardutil/MesAnnoncesCovoi']);
        });
    };
    MesAnnoncesCovoiComponent.prototype.supprimerAnnonceCovoi = function () {
        var _this = this;
        this.annonceCovoiService.supprimerAnnonceCovoi(this.model.id)
            .subscribe(function (data) {
            _this.router.navigate(['dashboardutil/MesAnnoncesCovoi']);
        });
    };
    MesAnnoncesCovoiComponent.prototype.accepterReservation = function () {
        var _this = this;
        console.log(this.idReservation);
        this.reservationService.accepterReservation(this.idReservation)
            .subscribe(function (data) {
            if (data !== null) {
                // this.router.navigate(['dashboardutil/Accueil']);
                console.log("ffffffffff" + data);
            }
            else {
                console.log("ssssssss");
                _this.message = "Nombre de places n'est pas disponible pour le moment   Complet ";
                console.log(_this.message);
                _this.alertService.error(_this.message);
                console.log(data);
            }
        });
    };
    MesAnnoncesCovoiComponent.prototype.refuserReservation = function () {
        var _this = this;
        var etat = '';
        this.reservationService.refuserReservation(this.idReservation)
            .subscribe(function (data) {
            _this.refused = true;
            console.log("refused");
        });
    };
    MesAnnoncesCovoiComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
        this.getMesAnnoncesCovoi();
    };
    MesAnnoncesCovoiComponent = __decorate([
        core_1.Component({
            selector: 'mes-annonces-covoi-cmp',
            moduleId: module.id,
            templateUrl: 'mesAnnoncesCovoi.component.html',
            providers: [annonceCovoi_service_1.AnnonceCovoiService, reservation_service_1.ReservationService],
            styleUrls: ['myModal3.css']
        }), 
        __metadata('design:paramtypes', [annonceCovoi_service_1.AnnonceCovoiService, router_1.Router, pays_service_1.PaysService, city_service_1.CityService, reservation_service_1.ReservationService, alert_service_1.AlertService])
    ], MesAnnoncesCovoiComponent);
    return MesAnnoncesCovoiComponent;
}());
exports.MesAnnoncesCovoiComponent = MesAnnoncesCovoiComponent;
//# sourceMappingURL=mesAnnoncesCovoi.component.js.map