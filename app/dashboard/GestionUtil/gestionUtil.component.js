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
var GestionUtilComponent = (function () {
    function GestionUtilComponent(userService) {
        this.userService = userService;
    }
    GestionUtilComponent.prototype.ngOnInit = function () {
        this.ListUtilisateur();
    };
    GestionUtilComponent.prototype.ListUtilisateur = function () {
        var _this = this;
        this.userService.getAll().
            subscribe(function (users) {
            _this.users = users;
            console.log(users);
        }, function (error) {
            console.log(error);
        });
    };
    GestionUtilComponent = __decorate([
        core_1.Component({
            selector: 'gestionUtil-cmp',
            moduleId: module.id,
            templateUrl: 'gestionUtil.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.UserService])
    ], GestionUtilComponent);
    return GestionUtilComponent;
}());
exports.GestionUtilComponent = GestionUtilComponent;
//# sourceMappingURL=gestionUtil.component.js.map