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
var core_1 = require("@angular/core");
var reservation_service_1 = require("../../_services/reservation.service");
var alert_service_1 = require("../../_services/alert.service");
var MesReservationsComponent = (function () {
    function MesReservationsComponent(reservationService, alertService) {
        this.reservationService = reservationService;
        this.alertService = alertService;
    }
    MesReservationsComponent.prototype.getReservationsByUtilisateurReservation = function () {
        var _this = this;
        console.log("here");
        this.reservationService.getReservationsByUtilisateurReservation(this.id)
            .subscribe(function (reservations) {
            _this.reservations = reservations,
                console.log("hhhh");
            console.log(_this.reservations);
        });
    };
    MesReservationsComponent.prototype.confirmerReservation = function () {
        var _this = this;
        console.log("ggggggggg");
        this.reservationService.confirmerReservation(this.idReservation).subscribe(function (data) {
            if (data !== null) {
                // this.router.navigate(['dashboardutil/Accueil']);
                console.log("ffffffffff" + data);
            }
            else {
                console.log("ssssssss");
                _this.message = " nombre de places indisponibles ";
                console.log(_this.message);
                _this.alertService.error(_this.message);
                console.log(data);
            }
        }, function (error) {
            if (error) {
                console.log("ssssssss");
                _this.message = "Complet pas de places disponibles ";
                console.log(_this.message);
                _this.alertService.error(_this.message);
            }
        });
    };
    MesReservationsComponent.prototype.annulerReservation = function () {
        this.reservationService.annulerReservation(this.idReservation).subscribe(function (data) {
            //this.getReservationsByUtilisateurReservation();
        });
    };
    MesReservationsComponent.prototype.onClick = function (reservation) {
        this.idReservation = reservation.idReservation;
        console.log(this.idReservation);
    };
    MesReservationsComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
        this.getReservationsByUtilisateurReservation();
    };
    MesReservationsComponent = __decorate([
        core_1.Component({
            selector: 'mes-reservations-covoi-cmp',
            moduleId: module.id,
            templateUrl: 'mesReservations.component.html',
            providers: [],
            styleUrls: ['mesReservations.component.css']
        }), 
        __metadata('design:paramtypes', [reservation_service_1.ReservationService, alert_service_1.AlertService])
    ], MesReservationsComponent);
    return MesReservationsComponent;
}());
exports.MesReservationsComponent = MesReservationsComponent;
//# sourceMappingURL=mesReservation.component.js.map