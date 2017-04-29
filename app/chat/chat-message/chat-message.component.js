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
var users_service_1 = require('./../user/users.service');
var message_model_1 = require('./../message/message.model');
var ChatMessageComponent = (function () {
    function ChatMessageComponent(UsersService) {
        this.UsersService = UsersService;
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // add service to save messages here .....
        console.log("message :   " + this.message.text);
        this.UsersService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
            if (_this.message.author && user) {
                _this.incoming = _this.message.author.id !== user.id;
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_model_1.Message)
    ], ChatMessageComponent.prototype, "message", void 0);
    ChatMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-message',
            templateUrl: './chat-message.component.html',
            styleUrls: ['./chat-message.component.css']
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());
exports.ChatMessageComponent = ChatMessageComponent;
//# sourceMappingURL=chat-message.component.js.map