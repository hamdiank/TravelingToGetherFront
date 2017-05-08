import {
  Component,
  Inject,
  ElementRef,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user.model';
import { UsersService } from '../user/users.service';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from '../thread/threads.service';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';

@Component({
  moduleId: module.id,
  selector: 'chat-window',
  templateUrl: 'chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public UsersService: UsersService,
    public el: ElementRef) {
  }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;
    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      });

    this.UsersService.currentUser
      .subscribe(
      (user: User) => {
        this.currentUser = user;
      });

    this.messages
      .subscribe(
      (messages: Array<Message>) => {
        
        setTimeout(() => {
          this.scrollToBottom();
        });
      });
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  sendMessage(): void {
    
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    // add Message service will be here ....

    
    console.log("message recu 1 "+JSON.stringify(m.author));
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
    console.log("draft 1:  " + JSON.stringify(this.draftMessage));
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
