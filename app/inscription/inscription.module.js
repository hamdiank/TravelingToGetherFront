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
var common_1 = require('@angular/common');
var inscription_component_1 = require('./inscription.component');
var forms_1 = require('@angular/forms');
var InscriptionModule = (function () {
    function InscriptionModule() {
    }
    InscriptionModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule],
            declarations: [inscription_component_1.InscriptionComponent],
            exports: [inscription_component_1.InscriptionComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], InscriptionModule);
    return InscriptionModule;
}());
exports.InscriptionModule = InscriptionModule;
//# sourceMappingURL=inscription.module.js.map