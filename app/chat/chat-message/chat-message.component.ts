import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from './../user/users.service';
import { ThreadsService } from './../thread/threads.service';
import { MessagesService } from './../message/messages.service';

import { Message } from './../message/message.model';
import { Thread } from './../thread/thread.model';
import { User } from './../user/user.model';

@Component({
  moduleId: module.id,
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public UsersService: UsersService) {
  }

  ngOnInit(): void {
    console.log("message :   " + this.message.text);
    this.UsersService.currentUser
      .subscribe(
      (user: User) => {
        this.currentUser = user;
        if (this.message.author && user) {
          console.log("incom1 " + this.message.author.idUtilisateur + "    " + user.idUtilisateur);
          this.incoming = this.message.author.idUtilisateur == user.idUtilisateur;
          console.log(this.incoming);
        }
      });
  }
}
