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
var router_1 = require('@angular/router');
var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(router) {
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentToken')) {
            var roles = route.data["roles"];
            console.log("roles in admin guard" + roles);
            console.log(localStorage.getItem('currentUserRole'));
            return (roles == null || roles.indexOf(localStorage.getItem('currentUserRole')) != -1);
        }
        console.log("eeetg");
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardAdmin = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
}());
exports.AuthGuardAdmin = AuthGuardAdmin;
//# sourceMappingURL=authAdmin.guards.js.map