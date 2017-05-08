/* tslint:disable:max-line-length */
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { ThreadsService } from '../thread/threads.service';
import { UsersService } from '../user/users.service';
import * as moment from 'moment';
import { DataService } from "./data.service";


// the person using the app us Juliet
const me: User = new User('Juliet', 'assets/images/avatars/female-avatar-1.png');
//const ladycap: User = new User('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
//const echo: User    = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
//const rev: User     = new User('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
const wait: User = new User('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');

//const tLadycap: Thread = new Thread('tLadycap', ladycap.name, ladycap.avatarSrc);
//const tEcho: Thread    = new Thread('tEcho', echo.name, echo.avatarSrc);
//const tRev: Thread     = new Thread('tRev', rev.name, rev.avatarSrc);
const tWait: Thread = new Thread('tWait', wait.name, wait.avatarSrc);

const initialMessages: Array<Message> = [

  // here , create messages that will be in the thread  

  new Message({
    author: wait,
    sentAt: moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
    thread: tWait
  }),
];


export class ChatExampleData {

  static result: any[];
  constructor(private dataService: DataService) {
    console.log("im here 2");


  }

  static init(messagesService: MessagesService,
    threadsService: ThreadsService,
    UsersService: UsersService, dataService: DataService): void {

    dataService.getAll().subscribe(element => {

      console.log("hhee");
      
      
      element.forEach(e => {
        console.log(JSON.stringify(element));
      initialMessages.push(new Message({
        author: wait,
        sentAt: moment().subtract(4, 'minutes').toDate(),
        text: e.text,
        thread: tWait
      }), );
    });
      initialMessages.map((message: Message) => messagesService.addMessage(message));

    });



    


    // TODO make `messages` hot
    messagesService.messages.subscribe(() => ({}));

    // set "Juliet" as the current user
    UsersService.setCurrentUser(me);

    // create the initial messages

    threadsService.setCurrentThread(tWait);



  }

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

  static getall(dataService: DataService) {
    console.log("enter 4");
    dataService.getAll().subscribe(result => {
      console.log("eee");
    });
  }
}
