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
var reservation_service_1 = require("../../_services/reservation.service");
var alert_service_1 = require("../../_services/alert.service");
var user_service_1 = require("../../_services/user.service");
var AnnonceCovoiDetailComponent = (function () {
    function AnnonceCovoiDetailComponent(annonceCovoiService, reservationService, route, alertService, userService) {
        var _this = this;
        this.annonceCovoiService = annonceCovoiService;
        this.reservationService = reservationService;
        this.route = route;
        this.alertService = alertService;
        this.userService = userService;
        this.annonceCovoi = {};
        this.utilisateur = {};
        this.reservations = [];
        this.preferences = {};
        this.voiture = {};
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log(_this.id);
            console.log('dddddddd');
        });
        console.log('I am here ' + this.id);
        this.annonceCovoiService.getAnnonceCovoi(this.id).subscribe(function (annonceCovoi) {
            _this.annonceCovoi = annonceCovoi,
                _this.utilisateur = annonceCovoi.utilisateur, _this.reservations = annonceCovoi.reservations,
                _this.preferences = _this.utilisateur.preferences, _this.voiture = _this.utilisateur.voiture;
            console.log("idutilisateur" + _this.utilisateur.idUtilisateur);
            console.log("idutilisateur" + _this.preferences.fumeur);
            // console.log(JSON.stringify(this.annonceCovoi))
            // console.log(JSON.stringify(this.utilisateur))
        });
    }
    /////////////////////////////////////
    AnnonceCovoiDetailComponent.prototype.showImage = function (filename) {
        var _this = this;
        this.userService.getImage(filename)
            .subscribe(function (file) {
            _this.image = file;
            console.log("imagee  " + _this.image);
        });
    };
    ////////////////////////////////////////////////
    AnnonceCovoiDetailComponent.prototype.reserver = function () {
        var _this = this;
        this.reservationService.reserver(this.annonceCovoi.id, this.currentUserId)
            .subscribe(function (data) {
            if (data !== null) {
                console.log("jjjjj" + data);
            }
            else {
                _this.message = " Vous avez déjà réservé ";
                console.log(_this.message);
                _this.alertService.error(" Vous avez déjà réservé ");
                _this.reserved = false;
                console.log(data);
            }
        });
    };
    /*   ngOnInit() : void{
        
             
   
           this.route.params
         .switchMap((params: Params) => this.annonceCovoiService.getAnnonceCovoi(+params['id']))
         .subscribe( annonceCovoi => { this.annonceCovoi = annonceCovoi});
           this.getAnnonceCovoi();
           console.log(typeof(this.annonceCovoi))
           console.log(JSON.stringify(this.annonceCovoi));
           */
    /////////////////////////////////////////////////////////
    AnnonceCovoiDetailComponent.prototype.ngOnInit = function () {
        console.log(typeof (this.utilisateur.idUtilisateur));
        this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        //console.log("mmmmmmmmmmmm"+this.utilisateur.id)
        //this.showImage(this.utilisateur.idUtilisateur);
        // console.log('my id'+this.currentUserId)
    };
    AnnonceCovoiDetailComponent = __decorate([
        core_1.Component({
            selector: 'annonce-covoi-detail-cmp',
            moduleId: module.id,
            templateUrl: 'annonceCovoiDetail.component.html',
            styleUrls: ['annonceCovoiDetail.component.css'],
            providers: [annonceCovoi_service_1.AnnonceCovoiService, reservation_service_1.ReservationService]
        }), 
        __metadata('design:paramtypes', [annonceCovoi_service_1.AnnonceCovoiService, reservation_service_1.ReservationService, router_1.ActivatedRoute, alert_service_1.AlertService, user_service_1.UserService])
    ], AnnonceCovoiDetailComponent);
    return AnnonceCovoiDetailComponent;
}());
exports.AnnonceCovoiDetailComponent = AnnonceCovoiDetailComponent;
//# sourceMappingURL=annonceCovoiDetail.component.js.map