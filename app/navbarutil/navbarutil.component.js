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
var NavBarUtilComponent = (function () {
    function NavBarUtilComponent(userService) {
        var _this = this;
        this.userService = userService;
        userService.getById(localStorage.getItem("currentUserId")).subscribe(function (result) {
            _this.nom = result.nom;
        });
        this.id = localStorage.getItem("currentUserId");
    }
    NavBarUtilComponent.prototype.ngOnInit = function () {
    };
    NavBarUtilComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-util-cmp',
            templateUrl: 'navbarutil.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], NavBarUtilComponent);
    return NavBarUtilComponent;
}());
exports.NavBarUtilComponent = NavBarUtilComponent;
//# sourceMappingURL=navbarutil.component.js.map