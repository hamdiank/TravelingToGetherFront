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
var Pays_1 = require("../../_models/Pays");
var annonceVol_service_1 = require("../../_services/annonceVol.service");
var commentaire_service_1 = require("../../_services/commentaire.service");
var AnnonceVolComponent = (function () {
    ///////////////////////////////////////////////////////////////
    function AnnonceVolComponent(annonceVolService, annonceCovoiService, router, paysService, cityService, commentaireService) {
        var _this = this;
        this.annonceVolService = annonceVolService;
        this.annonceCovoiService = annonceCovoiService;
        this.router = router;
        this.paysService = paysService;
        this.cityService = cityService;
        this.commentaireService = commentaireService;
        this.annoncesVol = [];
        this.selectedPays = new Pays_1.Pays();
        this.utilisateur = {};
        this.model = {};
        this.test = false;
        this.test2 = false;
        this.selectedPays.idPays = "0";
        this.paysService.getAll().subscribe(function (pays) {
            _this.pays = pays;
        });
        console.log(JSON.stringify(this.pays));
    }
    AnnonceVolComponent.prototype.onClick = function (commentaire) {
        console.log("ttttttttttttt" + commentaire.id);
        this.idCommentaire = commentaire.id;
    };
    AnnonceVolComponent.prototype.supprimerCommentaire = function () {
        var _this = this;
        this.commentaireService.deleteCommentaire(this.idCommentaire).subscribe(function (data) {
            console.log("rrrrrrr"),
                _this.getCommentairesByAnnonce(_this.idAnnonceVol);
        });
    };
    AnnonceVolComponent.prototype.getCommentairesByAnnonce = function (id) {
        var _this = this;
        console.log("vvvvvvvvvvvv" + id);
        this.idAnnonceVol = id;
        this.commentaireService.getCommentairesByAnnonceVol(id).subscribe(function (commentaires) {
            _this.commentaires = commentaires,
                console.log(commentaires);
        });
    };
    AnnonceVolComponent.prototype.addCommentaire = function () {
        var _this = this;
        console.log("fffffffff" + this.model.text);
        console.log("hhh" + this.id);
        console.log("zzzzzz" + this.idAnnonceVol);
        this.commentaireService.addCommentaireAnnonceVol(this.model.text, this.idAnnonceVol, this.id).subscribe(function (data) {
            console.log("model=>" + _this.model.text);
            _this.getCommentairesByAnnonce(_this.idAnnonceVol);
        });
    };
    //////////////////////////////////////////////////
    AnnonceVolComponent.prototype.getAnnoncesVol = function () {
        var _this = this;
        this.annonceVolService.getAnnoncesVol().subscribe(function (annoncesVol) {
            _this.annoncesVol = annoncesVol, _this.annoncesVolToFilter = annoncesVol;
            console.log('AnnoncesVol here');
            console.log(_this.annoncesVol);
            console.log('AnnoncesVolToFilter here');
            console.log(_this.annoncesVolToFilter);
        });
    };
    //////////////////////////////////////////////////
    AnnonceVolComponent.prototype.onSelect1 = function (idPays1) {
        var _this = this;
        console.log('idPaysDepart' + idPays1);
        console.log('idPaysDepartModel' + this.model.paysDepart);
        console.log('idVilleDepart' + this.model.villeDepart);
        this.paysService.getById(idPays1).subscribe(function (onePays) {
            _this.onePays = onePays, _this.cities = onePays.cities, _this.paysDepart = onePays.nom,
                _this.aeroports = onePays.aeroports;
        });
        //console.log(JSON.stringify(this.cities));
    };
    AnnonceVolComponent.prototype.onSelect2 = function (idPays2) {
        var _this = this;
        console.log('idPaysArrivee' + idPays2);
        console.log('idPaysArriveeModel' + this.model.paysDepart);
        console.log('idVilleArrivee' + this.model.villeArrivee);
        this.paysService.getById(idPays2).subscribe(function (onePays2) {
            _this.onePays2 = onePays2, _this.cities2 = onePays2.cities, _this.paysArrivee = onePays2.nom,
                _this.aeroports2 = onePays2.aeroports;
        });
        console.log(JSON.stringify(this.aeroports2));
        console.log(JSON.stringify(this.onePays2));
    };
    ///////////////////////////////////////////////////////////////
    AnnonceVolComponent.prototype.onSubmit = function () {
        console.log("paysDepart:" + this.model.paysDepart);
        console.log("paysArrivee:" + this.model.paysArrivee);
        console.log("aeroportDepart:" + this.model.aeroportDepart);
        console.log("aeroportArrivee:" + this.model.aeroportArrivee);
        console.log("dateDepart:" + this.model.dateDepart);
        /////////////////////////////////////////////
        if (this.model.paysDepart != 0 && this.model.aeroportDepart != 0) {
            this.annoncesVol = this.annoncesVolToFilter;
            var aDepart = this.model.aeroportDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.aeroportDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesVol);
        }
        ///////////////date depart //////////////////////////
        if (this.model.paysDepart != 0 && this.model.aeroportDepart != 0 && this.model.dateDepart != 0) {
            this.annoncesVol = this.annoncesVolToFilter;
            var aDepart = this.model.aeroportDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.aeroportDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1);
            });
            var dDepart = this.model.dateDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('4444444444');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesVol);
        }
        if (this.model.paysArrivee != 0 && this.model.aeroportArrivee != 0) {
            this.annoncesVol = this.annoncesVolToFilter;
            var aArrivee = this.model.aeroportArrivee;
            console.log(aArrivee);
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.aeroportArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1);
            });
        }
        //////////////////date depart /////////////////////////
        if (this.model.paysArrivee != 0 && this.model.aeroportArrivee != 0 && this.model.dateDepart != 0) {
            this.annoncesVol = this.annoncesVolToFilter;
            var aArrivee = this.model.aeroportArrivee;
            console.log(aArrivee);
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.aeroportArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1);
            });
            var dDepart = this.model.dateDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('4444444444');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1);
            });
        }
        if (this.model.paysDepart != 0 && this.model.aeroportDepart != 0 && this.model.paysArrivee != 0 && this.model.aeroportArrivee != 0) {
            this.annoncesVol = this.annoncesVolToFilter;
            var aDepart = this.model.aeroportDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.aeroportDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesVol);
            var aArrivee = this.model.aeroportArrivee;
            console.log(aArrivee);
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.aeroportArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1);
            });
        }
        ////////////////////date Depart///////////////////
        if (this.model.paysDepart != 0 && this.model.aeroportDepart != 0 && this.model.paysArrivee != 0 && this.model.aeroportArrivee != 0 && this.model.dateDepart != 0) {
            this.annoncesVol = this.annoncesVolToFilter;
            var aDepart = this.model.aeroportDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.aeroportDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesVol);
            var aArrivee = this.model.aeroportArrivee;
            console.log(aArrivee);
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.aeroportArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1);
            });
            var dDepart = this.model.dateDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('4444444444');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesVol = this.annoncesVol.filter(function (result) {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1);
            });
        }
    };
    AnnonceVolComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
        this.getAnnoncesVol();
        this.model.paysDepart = 0;
        this.model.paysArrivee = 0;
        this.model.aeroportDepart = 0;
        this.model.aeroportArrivee = 0;
        this.model.dateDepart = 0;
    };
    AnnonceVolComponent = __decorate([
        core_1.Component({
            selector: 'annonce-vol-cmp',
            moduleId: module.id,
            templateUrl: 'annonceVol.component.html',
            styleUrls: ['annonceVol.component.css'],
            providers: [annonceVol_service_1.AnnonceVolService, commentaire_service_1.CommentaireService]
        }), 
        __metadata('design:paramtypes', [annonceVol_service_1.AnnonceVolService, annonceCovoi_service_1.AnnonceCovoiService, router_1.Router, pays_service_1.PaysService, city_service_1.CityService, commentaire_service_1.CommentaireService])
    ], AnnonceVolComponent);
    return AnnonceVolComponent;
}());
exports.AnnonceVolComponent = AnnonceVolComponent;
//# sourceMappingURL=annonceVol.component.js.map