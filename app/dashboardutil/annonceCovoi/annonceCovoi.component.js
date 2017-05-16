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
var AnnonceCovoiComponent = (function () {
    ///////////////////////////////////////////////////////////////
    function AnnonceCovoiComponent(annonceCovoiService, router, paysService, cityService) {
        var _this = this;
        this.annonceCovoiService = annonceCovoiService;
        this.router = router;
        this.paysService = paysService;
        this.cityService = cityService;
        this.model = {};
        this.selectedPays = {};
        this.modelRecherche = {};
        this.test = false;
        this.selectedPays.idPays = '0';
        this.paysService.getAll().subscribe(function (pays) {
            _this.pays = pays;
        });
        console.log(JSON.stringify(this.pays));
        this;
    }
    //////////////////////////////////////////////////
    AnnonceCovoiComponent.prototype.onSelect1 = function (idPays1) {
        var _this = this;
        console.log('idPaysDepart' + idPays1);
        console.log('idPaysDepartModel' + this.model.paysDepart);
        console.log('idVilleDepart' + this.model.villeDepart);
        this.paysService.getById(idPays1).subscribe(function (onePays) {
            _this.onePays = onePays, _this.cities = onePays.cities, _this.paysDepart = onePays.nom;
        });
        console.log(JSON.stringify(this.cities));
    };
    AnnonceCovoiComponent.prototype.onSelect2 = function (idPays2) {
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
    /*onChange($eventChange){
          $eventChange.preventDefault();
        console.log('selectedchange: ' + $eventChange.target.value);
        this.getAnnoncesCovoi();
    
    }*/
    AnnonceCovoiComponent.prototype.onInput = function ($event) {
        //  this.annoncesCovoiToFilter=this.annoncesCovoi;
        console.log(JSON.stringify('111111' + this.annoncesCovoiToFilter));
        $event.preventDefault();
        console.log('selected11111: ' + $event.target.value);
        var vDepart = $event.target.value;
        if (this.test == true) {
            this.annoncesCovoi = this.annoncesCovoiToFilter;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeDepart.toLowerCase().indexOf(vDepart.toLowerCase()) > -1);
            });
        }
        else {
            if (vDepart && vDepart.trim() != "0") {
                console.log('33333333');
                this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                    return (result.villeDepart.toLowerCase().indexOf(vDepart.toLowerCase()) > -1);
                });
                this.test = true;
                console.log(this.test);
            }
            else {
                this.getAnnoncesCovoi();
            }
        }
    };
    AnnonceCovoiComponent.prototype.onInput2 = function ($event) {
        $event.preventDefault();
        console.log('selected: ' + $event.target.value);
    };
    //////////////////////////////////////////////////////////
    AnnonceCovoiComponent.prototype.getAnnoncesCovoi = function () {
        var _this = this;
        this.annonceCovoiService.getAnnoncesCovoi().subscribe(function (annoncesCovoi) {
            _this.annoncesCovoi = annoncesCovoi,
                _this.annoncesCovoiToFilter = annoncesCovoi;
        });
        console.log("annoncesCovoi");
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
        /*   console.log (localStorage.getItem('currentUser'));
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    console.log(currentUser)
                      this.id=currentUser;
                   //   console.log(currentUser.json().idUtilisateur)   */
    };
    AnnonceCovoiComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
        console.log("ngOnInit");
        this.getAnnoncesCovoi();
    };
    AnnonceCovoiComponent = __decorate([
        core_1.Component({
            selector: 'annonce-covoi-cmp',
            moduleId: module.id,
            templateUrl: 'annonceCovoi.component.html',
            providers: [annonceCovoi_service_1.AnnonceCovoiService]
        }), 
        __metadata('design:paramtypes', [annonceCovoi_service_1.AnnonceCovoiService, router_1.Router, pays_service_1.PaysService, city_service_1.CityService])
    ], AnnonceCovoiComponent);
    return AnnonceCovoiComponent;
}());
exports.AnnonceCovoiComponent = AnnonceCovoiComponent;
//# sourceMappingURL=annonceCovoi.component.js.map