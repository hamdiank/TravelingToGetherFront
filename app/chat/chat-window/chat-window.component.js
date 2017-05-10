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
var user_model_1 = require('../user/user.model');
var users_service_1 = require('../user/users.service');
var thread_model_1 = require('../thread/thread.model');
var threads_service_1 = require('../thread/threads.service');
var message_model_1 = require('../message/message.model');
var messages_service_1 = require('../message/messages.service');
var data_service_1 = require("../data/data.service");
var ChatWindowComponent = (function () {
    function ChatWindowComponent(messagesService, threadsService, UsersService, dataService, el) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.UsersService = UsersService;
        this.dataService = dataService;
        this.el = el;
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = this.threadsService.currentThreadMessages;
        this.draftMessage = new message_model_1.Message();
        this.threadsService.currentThread.subscribe(function (thread) {
            _this.currentThread = thread;
        });
        this.UsersService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
        });
        this.messages
            .subscribe(function (messages) {
            setTimeout(function () {
                _this.scrollToBottom();
            });
        });
    };
    ChatWindowComponent.prototype.onEnter = function (event) {
        this.sendMessage();
        event.preventDefault();
    };
    ChatWindowComponent.prototype.sendMessage = function () {
        var m = this.draftMessage;
        m.author = this.currentUser;
        m.thread = this.currentThread;
        m.isRead = true;
        // add Message service will be here ....
        // error when message is vide  
        this.dataService.sendMessage(new message_model_1.Message({
            author: new user_model_1.User(m.author.name, 'assets/images/avatars/female-avatar-1.png', m.author.idUtilisateur),
            sentAt: m.sentAt,
            isRead: m.isRead,
            text: m.text,
            thread: new thread_model_1.Thread(m.author.name, m.author.name, 'assets/images/avatars/female-avatar-1.png'),
            idDestinataire: m.author.idUtilisateur
        })).subscribe(function (result) {
            console.log("dgf");
        });
        console.log("message recu 1 " + JSON.stringify(m.author));
        this.messagesService.addMessage(m);
        this.draftMessage = new message_model_1.Message();
        console.log("draft 1:  " + JSON.stringify(this.draftMessage));
    };
    ChatWindowComponent.prototype.scrollToBottom = function () {
        var scrollPane = this.el
            .nativeElement.querySelector('.msg-container-base');
        scrollPane.scrollTop = scrollPane.scrollHeight;
    };
    ChatWindowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-window',
            templateUrl: 'chat-window.component.html',
            styleUrls: ['./chat-window.component.css']
        }), 
        __metadata('design:paramtypes', [messages_service_1.MessagesService, threads_service_1.ThreadsService, users_service_1.UsersService, data_service_1.DataService, core_1.ElementRef])
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());
exports.ChatWindowComponent = ChatWindowComponent;
//# sourceMappingURL=chat-window.component.js.map