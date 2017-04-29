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
var aeroport_service_1 = require("../../_services/aeroport.service");
var station_service_1 = require("../../_services/station.service");
var train_service_1 = require("../../_services/train.service");
var ParametrageComponent = (function () {
    function ParametrageComponent(paysService, pagerService, avionService, cityService, aeroportService, stationService, trainService, alertService) {
        this.paysService = paysService;
        this.pagerService = pagerService;
        this.avionService = avionService;
        this.cityService = cityService;
        this.aeroportService = aeroportService;
        this.stationService = stationService;
        this.trainService = trainService;
        this.alertService = alertService;
        this.loading = false;
        this.show = false;
        this.ajoute = false;
        this.model = {};
        this.model2 = {};
        this.model3 = {};
        this.model4 = {};
        this.returnArray = [];
        // pager object
        this.pager = {};
    }
    ParametrageComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/material-dashboard.js');
        console.log("loading on");
        this.loading = true;
        this.ListPays();
        this.ListAero();
        this.ListStation();
        this.ListAvions();
        this.ListCity();
        this.ListTrain();
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    ParametrageComponent.prototype.ListPays = function () {
        var _this = this;
        this.paysService.getAll().
            subscribe(function (pays) {
            _this.pays = pays;
            // initialize to page 1
            _this.setPage(1);
            _this.loading = false;
            console.log("loading off");
        }, function (error) {
            if (error)
                _this.alertService.error("error");
            _this.loading = false;
            console.log(error);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ParametrageComponent.prototype.addPays = function () {
        var _this = this;
        console.log(this.model2.nomPays);
        this.paysService.add(this.model2.nomPays).subscribe(function (result) {
            _this.ListPays();
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////
    ParametrageComponent.prototype.ajouterParametre = function () {
        var _this = this;
        this.ajoute = true;
        var v;
        var a;
        var s;
        if (this.model3.ville == null || this.model3.ville == "")
            console.log("ville null ");
        else
            v = this.model3.ville;
        if (this.model3.aeroport == null || this.model3.aeroport == "")
            console.log("aeroport null ");
        else
            a = this.model3.aeroport;
        if (this.model3.station == null || this.model3.station == "")
            console.log("aeroport null ");
        else
            s = this.model3.station;
        console.log(v + "  " + a + "  " + s);
        this.paysService.update(this.paysM, v, a, s).subscribe(function (result) {
            _this.ListAero();
            _this.ListCity();
            _this.ListStation();
            _this.ajoute = false;
        });
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    ParametrageComponent.prototype.supprimerPays = function () {
        var _this = this;
        this.show = true;
        console.log(this.paysM.idPays);
        this.paysService.delete(this.paysM.idPays).subscribe(function (resultat) {
            _this.ListPays();
            setTimeout(function () { _this.show = false; }, 2000);
        });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ParametrageComponent.prototype.modifierNomPays = function () {
        console.log(this.model.nom);
        this.paysM.nom = this.model.nom;
        this.paysService.updateNom(this.paysM).subscribe(function (result) {
            // this.ListPays();
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    ParametrageComponent.prototype.getPays = function (pays) {
        this.paysM = pays;
        this.nomM = this.paysM.nom;
    };
    ////////////////////////////////////////////////////////////////
    /*---------------------------------------------------------------------------------*/
    ParametrageComponent.prototype.getCity = function (city) {
        this.cityM = city;
    };
    ParametrageComponent.prototype.ListCity = function () {
        var _this = this;
        this.cityService.getAll().
            subscribe(function (city) {
            _this.city = city;
            // initialize to page 1
            // console.log(this.city);
            _this.setPageCity(1);
            _this.loading = false;
            console.log("loading off");
        }, function (error) {
            if (error)
                _this.alertService.error("error");
            _this.loading = false;
            console.log(error);
        });
    };
    ParametrageComponent.prototype.supprimerCity = function () {
        var _this = this;
        console.log(this.cityM.idCity);
        this.cityService.delete(this.cityM.idCity).subscribe(function (resultat) {
            _this.ListCity();
        });
    };
    ParametrageComponent.prototype.getPaysById = function (id) {
        return this.paysService.getById(id).subscribe(function (p) {
            console.log(p.nom);
            return p.nom;
        });
    };
    ParametrageComponent.prototype.getPaysByCity = function (nomC) {
        var _this = this;
        this.paysService.getByCity(nomC).subscribe(function (paysCity) {
            _this.paysCity = paysCity;
            return _this.paysCity.nom;
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////
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
    ParametrageComponent.prototype.setPageCity = function (page) {
        console.log();
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.city.length, page);
        // get current page of items
        this.pagedItemsCity = this.city.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ParametrageComponent.prototype.setPageAero = function (page) {
        console.log();
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.aero.length, page);
        // get current page of items
        this.pagedItemsAero = this.aero.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ParametrageComponent.prototype.setPageStation = function (page) {
        console.log();
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.station.length, page);
        // get current page of items
        this.pagedItemsStation = this.station.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    /*---------------------------------------------------------------------------------*/
    ParametrageComponent.prototype.getAero = function (aero) {
        this.aeroM = aero;
        console.log("dqssssssssss:zs " + JSON.stringify(this.aero));
    };
    ParametrageComponent.prototype.ListAero = function () {
        var _this = this;
        this.aeroportService.getAll().
            subscribe(function (aero) {
            _this.aero = aero;
            console.log("dqssssssssss: " + JSON.stringify(_this.aero));
            // initialize to page 1
            // console.log(this.city);
            _this.setPageAero(1);
            _this.loading = false;
            console.log("loading off");
        }, function (error) {
            if (error)
                _this.alertService.error("error");
            _this.loading = false;
            console.log(error);
        });
    };
    ParametrageComponent.prototype.supprimerAero = function () {
        var _this = this;
        console.log(this.aeroM.idAeroport);
        this.aeroportService.delete(this.aeroM.idAeroport).subscribe(function (resultat) {
            _this.ListAero();
        });
    };
    /*---------------------------------------------------------------------------------*/
    ParametrageComponent.prototype.getStation = function (station) {
        this.stationM = station;
        console.log("dqssssssssss:zs " + JSON.stringify(this.stationM));
    };
    ParametrageComponent.prototype.ListStation = function () {
        var _this = this;
        this.stationService.getAll().
            subscribe(function (station) {
            _this.station = station;
            // initialize to page 1
            _this.setPageStation(1);
            _this.loading = false;
            console.log("loading off");
        }, function (error) {
            if (error)
                _this.alertService.error("error");
            _this.loading = false;
            console.log(error);
        });
    };
    ParametrageComponent.prototype.supprimerStation = function () {
        var _this = this;
        console.log(this.stationM.idStation);
        this.stationService.delete(this.stationM.idStation).subscribe(function (resultat) {
            _this.ListStation();
        });
    };
    /*---------------------------------------------------------------------------------*/
    ParametrageComponent.prototype.getAvion = function (avion) {
        this.avionM = avion;
        console.log("df  " + JSON.stringify(this.avionM));
    };
    ParametrageComponent.prototype.ListAvions = function () {
        var _this = this;
        this.avionService.getAvions().subscribe(function (avions) {
            _this.avions = avions;
            console.log("aaaaaaaaaaa");
        });
    };
    //    console.log(this.avions);
    //    console.log(typeof(this.avions));
    ParametrageComponent.prototype.modifierAvion = function () {
    };
    ParametrageComponent.prototype.ajoutAvion = function () {
        this.avion.type = this.model4.typeAvion;
        console.log(this.avion.type);
        /*this.avionService.add(this.avion).subscribe(result=>{
        this.ListAvions();
        });*/
    };
    ParametrageComponent.prototype.supprimerAvion = function () {
        var _this = this;
        console.log(this.avionM.id);
        this.avionService.delete(this.avionM.id).subscribe(function (resultat) {
            console.log("del");
            _this.ListAvions();
        });
    };
    /*---------------------------------------------------------------------------------*/
    ParametrageComponent.prototype.getTrain = function (train) {
        this.trainM = train;
        console.log("df  " + JSON.stringify(this.trainM));
    };
    ParametrageComponent.prototype.ListTrain = function () {
        var _this = this;
        this.trainService.getAll().subscribe(function (trains) {
            _this.trains = trains;
            console.log("aaaaaaaaaaa");
        });
    };
    ParametrageComponent.prototype.supprimerTrain = function () {
        var _this = this;
        console.log(this.trainM.id);
        this.trainService.delete(this.trainM.id).subscribe(function (resultat) {
            console.log("del");
            _this.ListTrain();
        });
    };
    ParametrageComponent = __decorate([
        core_1.Component({
            selector: 'parametrage-cmp',
            moduleId: module.id,
            templateUrl: 'parametrage.component.html',
        }), 
        __metadata('design:paramtypes', [index_1.PaysService, index_1.PagerService, avion_service_1.AvionService, index_1.CityService, aeroport_service_1.AeroportService, station_service_1.StationService, train_service_1.TrainService, index_1.AlertService])
    ], ParametrageComponent);
    return ParametrageComponent;
}());
exports.ParametrageComponent = ParametrageComponent;
//# sourceMappingURL=parametrage.component.js.map