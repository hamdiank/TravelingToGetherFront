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
var commentaire_service_1 = require("../../_services/commentaire.service");
var AnnonceCovoiComponent = (function () {
    ///////////////////////////////////////////////////////////////
    function AnnonceCovoiComponent(annonceCovoiService, router, paysService, cityService, commentaireService) {
        var _this = this;
        this.annonceCovoiService = annonceCovoiService;
        this.router = router;
        this.paysService = paysService;
        this.cityService = cityService;
        this.commentaireService = commentaireService;
        this.utilisateur = {};
        this.model = {};
        this.selectedPays = {};
        this.modelRecherche = {};
        this.test = false;
        this.test2 = false;
        this.selectedPays.idPays = '0';
        this.paysService.getAll().subscribe(function (pays) {
            _this.pays = pays;
        });
        console.log(JSON.stringify(this.pays));
    }
    //////////////////////////////////////////////////
    /*paginate(event) {
            //event.first = Index of the first record
            event.rows = 4;
            //event.page = Index of the new page
            //event.pageCount = Total number of pages
        }
    */
    AnnonceCovoiComponent.prototype.onClick = function (commentaire) {
        console.log("ttttttttttttt" + commentaire.id);
        this.idCommentaire = commentaire.id;
    };
    AnnonceCovoiComponent.prototype.supprimerCommentaire = function () {
        var _this = this;
        this.commentaireService.deleteCommentaire(this.idCommentaire).subscribe(function (data) {
            console.log("rrrrrrr"),
                _this.getCommentairesByAnnonce(_this.idAnnonceCovoi);
        });
    };
    AnnonceCovoiComponent.prototype.getCommentairesByAnnonce = function (id) {
        var _this = this;
        console.log("vvvvvvvvvvvv" + id);
        this.idAnnonceCovoi = id;
        this.commentaireService.getCommentairesByAnnonce(id).subscribe(function (commentaires) {
            _this.commentaires = commentaires,
                console.log(commentaires);
        });
    };
    AnnonceCovoiComponent.prototype.addCommentaire = function () {
        var _this = this;
        console.log("fffffffff" + this.model.text);
        this.commentaireService.addCommentaire(this.model.text, this.idAnnonceCovoi, this.id).subscribe(function (data) {
            console.log("model=>" + _this.model.text),
                _this.getCommentairesByAnnonce(_this.idAnnonceCovoi);
        });
    };
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
    AnnonceCovoiComponent.prototype.onSubmit = function () {
        console.log("paysDepart:" + this.model.paysDepart);
        console.log("paysArrivee:" + this.model.paysArrivee);
        console.log("aeroportDepart:" + this.model.villeDepart);
        console.log("aeroportArrivee:" + this.model.villeArrivee);
        console.log("dateDepart: " + this.model.dateDepart);
        /////////////////////////////////////////////
        if (this.model.paysDepart != 0 && this.model.villeDepart != 0) {
            this.annoncesCovoi = this.annoncesCovoiToFilter;
            var vDepart = this.model.villeDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeDepart.toLowerCase().indexOf(vDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesCovoi);
        }
        ////////////////////date depart////////////////////
        if (this.model.paysDepart != 0 && this.model.villeDepart != 0 && this.model.dateDepart != 0) {
            this.annoncesCovoi = this.annoncesCovoiToFilter;
            var vDepart = this.model.villeDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeDepart.toLowerCase().indexOf(vDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesCovoi);
            var dDepart = this.model.dateDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('4444444444');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesCovoi);
        }
        if (this.model.paysArrivee != 0 && this.model.villeArrivee != 0) {
            this.annoncesCovoi = this.annoncesCovoiToFilter;
            var aArrivee = this.model.villeArrivee;
            console.log(aArrivee);
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1);
            });
        }
        /////////////////////////////date depart/////////////
        if (this.model.paysArrivee != 0 && this.model.villeArrivee != 0 && this.model.dateDepart != 0) {
            this.annoncesCovoi = this.annoncesCovoiToFilter;
            var aArrivee = this.model.villeArrivee;
            console.log(aArrivee);
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1);
            });
            var dDepart = this.model.dateDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('4444444444');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1);
            });
        }
        if (this.model.paysDepart != 0 && this.model.villeDepart != 0 && this.model.paysArrivee != 0 && this.model.villeArrivee != 0) {
            this.annoncesCovoi = this.annoncesCovoiToFilter;
            var aDepart = this.model.villeDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesCovoi);
            var aArrivee = this.model.villeArrivee;
            console.log(aArrivee);
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1);
            });
        }
        //////////////////date depart //////////////
        if (this.model.paysDepart != 0 && this.model.villeDepart != 0 && this.model.paysArrivee != 0 && this.model.villeArrivee != 0 && this.model.dateDepart != 0) {
            this.annoncesCovoi = this.annoncesCovoiToFilter;
            var aDepart = this.model.villeDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('22222222');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1);
            });
            console.log('333333333333');
            console.log(this.annoncesCovoi);
            var aArrivee = this.model.villeArrivee;
            console.log(aArrivee);
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.villeArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1);
            });
            var dDepart = this.model.dateDepart;
            //this.annoncesCovoi=this.annoncesCovoiToFilter;
            console.log('4444444444');
            //  this.annoncesCovoi=this.annoncesCovoiToFilter;
            //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
            this.annoncesCovoi = this.annoncesCovoi.filter(function (result) {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1);
            });
        }
    };
    //////////////////////////////////////////////////////////
    AnnonceCovoiComponent.prototype.getAnnoncesCovoi = function () {
        var _this = this;
        this.annonceCovoiService.getAnnoncesCovoi().subscribe(function (annoncesCovoi) {
            _this.annoncesCovoi = annoncesCovoi,
                _this.annoncesCovoiToFilter = annoncesCovoi;
        });
        console.log("annoncesCovoi");
        console.log(this.annoncesCovoi);
        console.log(this.utilisateur);
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
    };
    /////////////////////////////////////////////////
    AnnonceCovoiComponent.prototype.onKey = function (event) {
        // this.idUtilisateur=newValue;
        console.log(event.target.value);
        //console.log(typeof($event.target.value))
    };
    /////////////////////////////////////////////////
    AnnonceCovoiComponent.prototype.ngOnInit = function () {
        var currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id = currentUserId;
        console.log(this.id);
        console.log("ngOnInit");
        this.getAnnoncesCovoi();
        this.model.paysDepart = 0;
        this.model.paysArrivee = 0;
        this.model.villeDepart = 0;
        this.model.villeArrivee = 0;
        this.model.dateDepart = 0;
    };
    AnnonceCovoiComponent = __decorate([
        core_1.Component({
            selector: 'annonce-covoi-cmp',
            moduleId: module.id,
            templateUrl: 'annonceCovoi.component.html',
            providers: [annonceCovoi_service_1.AnnonceCovoiService, commentaire_service_1.CommentaireService],
            styleUrls: ['annonceCovoi.component.css']
        }), 
        __metadata('design:paramtypes', [annonceCovoi_service_1.AnnonceCovoiService, router_1.Router, pays_service_1.PaysService, city_service_1.CityService, commentaire_service_1.CommentaireService])
    ], AnnonceCovoiComponent);
    return AnnonceCovoiComponent;
}());
exports.AnnonceCovoiComponent = AnnonceCovoiComponent;
//# sourceMappingURL=annonceCovoi.component.js.map