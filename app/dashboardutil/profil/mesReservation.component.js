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
var MesReservationsComponent = (function () {
    function MesReservationsComponent(reservationService) {
        this.reservationService = reservationService;
    }
    MesReservationsComponent.prototype.getReservationsByUtilisateurReservation = function () {
        var _this = this;
        this.reservationService.getReservationsByUtilisateurReservation(this.id)
            .subscribe(function (reservations) {
            _this.reservations = reservations,
                console.log("hhhh" + _this.reservations);
        });
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
        __metadata('design:paramtypes', [reservation_service_1.ReservationService])
    ], MesReservationsComponent);
    return MesReservationsComponent;
}());
exports.MesReservationsComponent = MesReservationsComponent;
//# sourceMappingURL=mesReservation.component.js.map