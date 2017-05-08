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
var chat_example_data_1 = require('./data/chat-example-data');
var users_service_1 = require('./user/users.service');
var threads_service_1 = require('./thread/threads.service');
var messages_service_1 = require('./message/messages.service');
var data_service_1 = require("./data/data.service");
var App2Component = (function () {
    function App2Component(messagesService, threadsService, usersService, dataService) {
        this.messagesService = messagesService;
        this.threadsService = threadsService;
        this.usersService = usersService;
        this.dataService = dataService;
        chat_example_data_1.ChatExampleData.init(messagesService, threadsService, usersService, dataService);
    }
    App2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: './app2.component.html',
            styleUrls: ['./app2.component.css']
        }), 
        __metadata('design:paramtypes', [messages_service_1.MessagesService, threads_service_1.ThreadsService, users_service_1.UsersService, data_service_1.DataService])
    ], App2Component);
    return App2Component;
}());
exports.App2Component = App2Component;
//# sourceMappingURL=app2.component.js.map