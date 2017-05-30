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
var user_service_1 = require("../../_services/user.service");
var router_1 = require("@angular/router");
var PublicProfilComponent = (function () {
    function PublicProfilComponent(userService, route) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log(_this.id);
        });
        this.userService.getById(this.id).subscribe(function (result) {
            _this.u = result;
            console.log(_this.u.voiture);
            _this.nom = _this.u.nom;
            _this.prenom = _this.u.prenom;
            _this.mail = _this.u.email;
            _this.dateN = _this.u.dateNaissance;
            _this.profession = _this.u.profession;
            _this.nTel = _this.u.numTelephone;
            _this.description = _this.u.description;
            _this.preferences = _this.u.preferences;
            console.log(_this.u.preferences);
            _this.animaux = _this.preferences.animaux;
            _this.fumeur = _this.preferences.fumeur;
            _this.musique = _this.preferences.musique;
            _this.modele = _this.u.voiture.modele;
            _this.energie = _this.u.voiture.energie;
            _this.nbPlace = _this.u.voiture.nombrePlace;
            _this.marque = _this.u.voiture.marque;
            console.log(_this.energie);
        });
    }
    PublicProfilComponent.prototype.ngOnInit = function () {
        $.getScript('../assets/js/initMenu.js');
        console.log("mmmmm" + typeof (this.id));
        this.showImage(this.id);
        this.showImageVoiture(this.id);
        this.getAvis(this.id);
        this.showImageavis(this.id);
    };
    PublicProfilComponent.prototype.showImage = function (filename) {
        var _this = this;
        this.userService.getImage(filename)
            .subscribe(function (file) {
            _this.image = file;
            console.log("imagee  " + _this.image);
        });
    };
    PublicProfilComponent.prototype.showImageVoiture = function (filename) {
        var _this = this;
        this.userService.getImageVoiture(filename)
            .subscribe(function (file) {
            _this.imageVoiture = file;
            console.log("imagee  " + _this.imageVoiture);
        });
    };
    PublicProfilComponent.prototype.showImageavis = function (filename) {
        var _this = this;
        this.userService.getImage(filename)
            .subscribe(function (file) {
            _this.imageavis = file;
            console.log("imagee  " + _this.image);
        });
    };
    PublicProfilComponent.prototype.getAvis = function (id) {
        var _this = this;
        this.userService.getAvis(id).subscribe(function (result) {
            _this.avis = result;
            console.log("aviiis" + _this.avis);
        });
    };
    PublicProfilComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'public_profil',
            templateUrl: 'profil_public.component.html',
            styles: ["\n\n  .material-button {\n    position: relative;\n    top: 0;\n    z-index: 1;\n    width: 70px;\n    height: 70px;\n    font-size: 1.5em;\n    color: #fff;\n    background: #2C98DE;\n    border: none;\n    border-radius: 50%;\n    box-shadow: 0 3px 6px rgba(0,0,0,.275);\n    outline: none;\n}\n\n /* USER PROFILE PAGE */\n .card {\n    margin-top: 20px;\n    padding: 30px;\n    background-color: rgba(214, 224, 226, 0.2);\n    -webkit-border-top-left-radius:5px;\n    -moz-border-top-left-radius:5px;\n    border-top-left-radius:5px;\n    -webkit-border-top-right-radius:5px;\n    -moz-border-top-right-radius:5px;\n    border-top-right-radius:5px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.card.hovercard {\n    position: relative;\n    padding-top: 0;\n    overflow: hidden;\n    text-align: center;\n    background-color: #fff;\n    background-color: rgba(255, 255, 255, 1);\n}\n.card.hovercard .card-background {\n    height: 130px;\n}\n.card-background img {\n    -webkit-filter: blur(25px);\n    -moz-filter: blur(25px);\n    -o-filter: blur(25px);\n    -ms-filter: blur(25px);\n    filter: blur(25px);\n    margin-left: -100px;\n    margin-top: -200px;\n    min-width: 130%;\n}\n.card.hovercard .useravatar {\n    position: absolute;\n    top: 15px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .useravatar img {\n    width: 100px;\n    height: 100px;\n    max-width: 100px;\n    max-height: 100px;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    border-radius: 50%;\n    border: 5px solid rgba(255, 255, 255, 0.5);\n}\n.card.hovercard .card-info {\n    position: absolute;\n    bottom: 14px;\n    left: 0;\n    right: 0;\n}\n.card.hovercard .card-info .card-title {\n    padding:0 5px;\n    font-size: 20px;\n    line-height: 1;\n    color: #262626;\n    background-color: rgba(255, 255, 255, 0.1);\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n}\n.card.hovercard .card-info {\n    overflow: hidden;\n    font-size: 12px;\n    line-height: 20px;\n    color: #737373;\n    text-overflow: ellipsis;\n}\n.card.hovercard .bottom {\n    padding: 0 20px;\n    margin-bottom: 17px;\n}\n.btn-pref .btn {\n    -webkit-border-radius:0 !important;\n}\n\n\n\n.panel-shadow {\n    box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;\n}\n.panel-white {\n  border: 1px solid #dddddd;\n}\n.panel-white  .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.panel-white  .panel-footer {\n  background-color: #fff;\n  border-color: #ddd;\n}\n\n.post .post-heading {\n  height: 95px;\n  padding: 20px 15px;\n}\n.post .post-heading .avatar {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-right: 15px;\n}\n.post .post-heading .meta .title {\n  margin-bottom: 0;\n}\n.post .post-heading .meta .title a {\n  color: black;\n}\n.post .post-heading .meta .title a:hover {\n  color: #aaaaaa;\n}\n.post .post-heading .meta .time {\n  margin-top: 8px;\n  color: #999;\n}\n.post .post-image .image {\n  width: 100%;\n  height: auto;\n}\n.post .post-description {\n  padding: 15px;\n}\n.post .post-description p {\n  font-size: 14px;\n}\n.post .post-description .stats {\n  margin-top: 20px;\n}\n.post .post-description .stats .stat-item {\n  display: inline-block;\n  margin-right: 15px;\n}\n.post .post-description .stats .stat-item .icon {\n  margin-right: 8px;\n}\n.post .post-footer {\n  border-top: 1px solid #ddd;\n  padding: 15px;\n}\n.post .post-footer .input-group-addon a {\n  color: #454545;\n}\n.post .post-footer .comments-list {\n  padding: 0;\n  margin-top: 20px;\n  list-style-type: none;\n}\n.post .post-footer .comments-list .comment {\n  display: block;\n  width: 100%;\n  margin: 20px 0;\n}\n.post .post-footer .comments-list .comment .avatar {\n  width: 35px;\n  height: 35px;\n}\n.post .post-footer .comments-list .comment .comment-heading {\n  display: block;\n  width: 100%;\n}\n.post .post-footer .comments-list .comment .comment-heading .user {\n  font-size: 14px;\n  font-weight: bold;\n  display: inline;\n  margin-top: 0;\n  margin-right: 10px;\n}\n.post .post-footer .comments-list .comment .comment-heading .time {\n  font-size: 12px;\n  color: #aaa;\n  margin-top: 0;\n  display: inline;\n}\n.post .post-footer .comments-list .comment .comment-body {\n  margin-left: 50px;\n}\n.post .post-footer .comments-list .comment > .comments-list {\n  margin-left: 50px;\n}\n\n    "]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], PublicProfilComponent);
    return PublicProfilComponent;
}());
exports.PublicProfilComponent = PublicProfilComponent;
//# sourceMappingURL=profil_public.component.js.map