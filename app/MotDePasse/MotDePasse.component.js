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
var router_1 = require("@angular/router");
var MotDePassOublie_1 = require("../_services/MotDePassOublie");
var index_1 = require("../_services/index");
var MotDePasseComponent = (function () {
    function MotDePasseComponent(route, router, motDePasseService, alertService) {
        this.route = route;
        this.router = router;
        this.motDePasseService = motDePasseService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    MotDePasseComponent.prototype.ngOnInit = function () { };
    MotDePasseComponent.prototype.reset = function () {
        var _this = this;
        this.loading = true;
        this.motDePasseService.reset(this.model.mail).subscribe(function (result) {
            _this.loading = false;
            _this.alertService.success("Consulter votre mail");
        }, function (error) {
            if (error)
                _this.alertService.error("verifier votre mail");
            _this.loading = false;
        });
    };
    MotDePasseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'selector',
            templateUrl: 'MotDePasse.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, MotDePassOublie_1.MotDePasseOublieService, index_1.AlertService])
    ], MotDePasseComponent);
    return MotDePasseComponent;
}());
exports.MotDePasseComponent = MotDePasseComponent;
//# sourceMappingURL=MotDePasse.component.js.map