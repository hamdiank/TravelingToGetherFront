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
var TableComponent = (function () {
    function TableComponent(userService) {
        this.userService = userService;
        this.serveId = new core_1.EventEmitter();
    }
    TableComponent.prototype.ngOnInit = function () {
        this.ListUtilisateur();
    };
    TableComponent.prototype.ListUtilisateur = function () {
        var _this = this;
        this.userService.getAll().
            subscribe(function (users) {
            _this.users = users;
            console.log(users);
        }, function (error) {
            console.log(error);
        });
    };
    TableComponent.prototype.modifier = function (user) {
        console.log("eehjeh: " + user);
        this.serveId.emit(user);
    };
    TableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tab',
            outputs: ['serveId'],
            templateUrl: 'table.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.UserService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map