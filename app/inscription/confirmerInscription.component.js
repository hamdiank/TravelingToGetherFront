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
var ConfirmerInscriptionComponent = (function () {
    function ConfirmerInscriptionComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = {};
    }
    ConfirmerInscriptionComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.model.email);
        this.userService.confirmerInscription(this.model.email)
            .subscribe(function (data) { _this.router.navigate(['/login']); });
    };
    ConfirmerInscriptionComponent.prototype.ngOnInit = function () {
    };
    ConfirmerInscriptionComponent = __decorate([
        core_1.Component({
            selector: 'conf-insc-cmp',
            moduleId: module.id,
            templateUrl: 'confirmerInscription.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], ConfirmerInscriptionComponent);
    return ConfirmerInscriptionComponent;
}());
exports.ConfirmerInscriptionComponent = ConfirmerInscriptionComponent;
//# sourceMappingURL=confirmerInscription.component.js.map