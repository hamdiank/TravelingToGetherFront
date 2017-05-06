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
var threads_service_1 = require('./../thread/threads.service');
var thread_model_1 = require('../thread/thread.model');
var ChatThreadComponent = (function () {
    function ChatThreadComponent(threadsService) {
        this.threadsService = threadsService;
        this.selected = false;
    }
    ChatThreadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadsService.currentThread
            .subscribe(function (currentThread) {
            _this.selected = currentThread &&
                _this.thread &&
                (currentThread.id === _this.thread.id);
        });
    };
    ChatThreadComponent.prototype.clicked = function (event) {
        this.threadsService.setCurrentThread(this.thread);
        event.preventDefault();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', thread_model_1.Thread)
    ], ChatThreadComponent.prototype, "thread", void 0);
    ChatThreadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-thread',
            templateUrl: './chat-thread.component.html',
            styleUrls: ['./chat-thread.component.css']
        }), 
        __metadata('design:paramtypes', [threads_service_1.ThreadsService])
    ], ChatThreadComponent);
    return ChatThreadComponent;
}());
exports.ChatThreadComponent = ChatThreadComponent;
//# sourceMappingURL=chat-thread.component.js.map