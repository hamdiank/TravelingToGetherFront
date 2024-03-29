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
var user_service_1 = require("../_services/user.service");
var router_1 = require("@angular/router");
var alert_service_1 = require("../_services/alert.service");
var InscriptionComponent = (function () {
    function InscriptionComponent(userService, router, alertService) {
        this.userService = userService;
        this.router = router;
        this.alertService = alertService;
        this.model = {};
        this.model2 = {};
    }
    InscriptionComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("aaaaaaaaaaaa");
        //console.log(this.user);
        this.userService.addUser(this.model.prenom, this.model.nom, this.model.profession, this.model.numTelephone, this.model.email, this.model.login, this.model.password)
            .subscribe(function (data) {
            if (data !== null) {
                _this.router.navigate(['dashboardutil/Accueil']);
                console.log("ffffffffff" + data);
            }
            else {
                console.log("ssssssss");
                _this.message = " Vous êtes déjà inscrit";
                console.log(_this.message);
                _this.alertService.error(_this.message);
                console.log(data);
            }
        }, function (error) {
            if (error) {
                console.log("ssssssss");
                _this.message = " Ce login déjà existe ";
                console.log(_this.message);
                _this.alertService.error(_this.message);
            }
        });
    };
    InscriptionComponent.prototype.ngOnInit = function () {
    };
    InscriptionComponent = __decorate([
        core_1.Component({
            selector: 'user-cmp',
            moduleId: module.id,
            templateUrl: 'inscription.component.html',
            providers: [user_service_1.UserService],
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, alert_service_1.AlertService])
    ], InscriptionComponent);
    return InscriptionComponent;
}());
exports.InscriptionComponent = InscriptionComponent;
//# sourceMappingURL=inscription.component.js.map