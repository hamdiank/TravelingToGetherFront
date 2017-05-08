"use strict";
/* tslint:disable:max-line-length */
var user_model_1 = require('../user/user.model');
var thread_model_1 = require('../thread/thread.model');
var message_model_1 = require('../message/message.model');
var moment = require('moment');
// the person using the app us Juliet
var me = new user_model_1.User('Juliet', 'assets/images/avatars/female-avatar-1.png');
//const ladycap: User = new User('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
//const echo: User    = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
//const rev: User     = new User('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
var wait = new user_model_1.User('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');
//const tLadycap: Thread = new Thread('tLadycap', ladycap.name, ladycap.avatarSrc);
//const tEcho: Thread    = new Thread('tEcho', echo.name, echo.avatarSrc);
//const tRev: Thread     = new Thread('tRev', rev.name, rev.avatarSrc);
var tWait = new thread_model_1.Thread('tWait', wait.name, wait.avatarSrc);
var initialMessages = [
    // here , create messages that will be in the thread  
    new message_model_1.Message({
        author: wait,
        sentAt: moment().subtract(4, 'minutes').toDate(),
        text: "I'll wait however many seconds you send to me before responding. Try sending '3'",
        thread: tWait
    }),
];
var ChatExampleData = (function () {
    function ChatExampleData(dataService) {
        this.dataService = dataService;
        console.log("i m here 2");
    }
    ChatExampleData.init = function (messagesService, threadsService, UsersService, dataService) {
        dataService.getAll().subscribe(function (element) {
            console.log(JSON.stringify(element));
            element.forEach(function (e) {
                console.log(JSON.stringify(e));
                initialMessages.push(new message_model_1.Message({
                    author: wait,
                    sentAt: moment().subtract(4, 'minutes').toDate(),
                    text: e.text,
                    thread: tWait
                }));
            });
            initialMessages.map(function (message) { return messagesService.addMessage(message); });
        });
        // TODO make `messages` hot
        messagesService.messages.subscribe(function () { return ({}); });
        // set "Juliet" as the current user
        UsersService.setCurrentUser(me);
        // create the initial messages
        threadsService.setCurrentThread(tWait);
    };
    //  setupBots(messagesService: MessagesService): void {
    // echo bot
    /*
    
        // reverse bot
        
    
        // waiting bot
        messagesService.messagesForThreadUser(tWait, wait)
          .forEach( (message: Message): void => {
    
            let waitTime: number = parseInt(message.text, 10);
            let reply: string;
    
            if (isNaN(waitTime)) {
              waitTime = 0;
              reply = `I didn\'t understand ${message.text}. Try sending me a number`;
            } else {
              reply = `I waited ${waitTime} seconds to send you this.`;
            }
    
            setTimeout(
              () => {
                messagesService.addMessage(
                  new Message({
                    author: wait,
                    text: reply,
                    thread: tWait
                  })
                );
              },
              waitTime * 1000);
          },
                    null);
    
    */
    // }
    ChatExampleData.getall = function (dataService) {
        console.log("enter 4");
        dataService.getAll().subscribe(function (result) {
            console.log("eee");
        });
    };
    return ChatExampleData;
}());
exports.ChatExampleData = ChatExampleData;
//# sourceMappingURL=chat-example-data.js.map