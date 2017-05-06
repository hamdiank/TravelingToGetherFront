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
var _ = require('lodash');
var threads_service_1 = require('./../thread/threads.service');
var messages_service_1 = require('./../message/messages.service');
var ChatNavBarComponent = (function () {
    function ChatNavBarComponent(messagesService, threadsService) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
    }
    ChatNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.messages
            .combineLatest(this.threadsService.currentThread, function (messages, currentThread) {
            return [currentThread, messages];
        })
            .subscribe(function (_a) {
            var currentThread = _a[0], messages = _a[1];
            _this.unreadMessagesCount =
                _.reduce(messages, function (sum, m) {
                    var messageIsInCurrentThread = m.thread &&
                        currentThread &&
                        (currentThread.id === m.thread.id);
                    // note: in a "real" app you should also exclude
                    // messages that were authored by the current user b/c they've
                    // already been "read"
                    if (m && !m.isRead && !messageIsInCurrentThread) {
                        sum = sum + 1;
                    }
                    return sum;
                }, 0);
        });
    };
    ChatNavBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-nav-bar',
            templateUrl: './chat-nav-bar.component.html',
            styleUrls: ['./chat-nav-bar.component.css']
        }), 
        __metadata('design:paramtypes', [messages_service_1.MessagesService, threads_service_1.ThreadsService])
    ], ChatNavBarComponent);
    return ChatNavBarComponent;
}());
exports.ChatNavBarComponent = ChatNavBarComponent;
//# sourceMappingURL=chat-nav-bar.component.js.map