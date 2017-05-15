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
var core_1 = require("@angular/core");
var Country_1 = require("../../_models/Country");
var State_1 = require("../../_models/State");
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getCountries = function () {
        return [
            new Country_1.Country(1, 'USA'),
            new Country_1.Country(2, 'India'),
            new Country_1.Country(3, 'Australia')
        ];
    };
    DataService.prototype.getStates = function () {
        return [
            new State_1.State(1, 1, 'Arizona'),
            new State_1.State(2, 1, 'Alaska'),
            new State_1.State(3, 1, 'Florida'),
            new State_1.State(4, 1, 'Hawaii'),
            new State_1.State(5, 2, 'Gujarat'),
            new State_1.State(6, 2, 'Goa'),
            new State_1.State(7, 2, 'Punjab'),
            new State_1.State(8, 3, 'Queensland'),
            new State_1.State(9, 3, 'South Australia'),
            new State_1.State(10, 3, 'Tasmania')
        ];
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map