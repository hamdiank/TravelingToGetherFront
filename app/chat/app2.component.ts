import { Component, Inject } from '@angular/core';
import { ChatExampleData } from './data/chat-example-data';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';
import { DataService } from "./data/data.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component {
  constructor(public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public usersService: UsersService, public dataService: DataService) {
  
    ChatExampleData.init(messagesService, threadsService, usersService, dataService);

  }
}
