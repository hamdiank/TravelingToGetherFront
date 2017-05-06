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
var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SpinnerComponent.prototype, "spinnerShow", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: 'spinner-component',
            template: "<div *ngIf=\"spinnerShow\" class=\"sc-background\"></div><div *ngIf=\"spinnerShow\" class=\"sc-default-spinner sc-center\"></div>",
            styles: ["\n        .sc-default-spinner {\n            width: 20px;\n            height: 20px;\n            background-color: #ff3333;\n            -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n            animation: sk-rotateplane 1.2s infinite ease-in-out;\n    }\n\n    @-webkit-keyframes sk-rotateplane {\n      0% { -webkit-transform: perspective(120px) }\n      50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n      100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n    }\n\n    @keyframes sk-rotateplane {\n      0% { \n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \n      } 50% { \n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \n      } 100% { \n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n      }\n\n    .sc-background{\n        content : \"\";\n        z-index: 1;\n        position: absolute;\n        top:0;\n        right:0;\n        left:0;\n        bottom: 0;\n        background-color: rgba(255,255,255,0.8);\n    }\n    .sc-center{\n        top: 0;\n        bottom: 0;\n        margin: auto;\n        position: absolute;\n        left: 0;\n        right: 0;\n        z-index:2;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map