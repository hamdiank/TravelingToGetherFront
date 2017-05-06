import { Component, OnInit } from '@angular/core';
import { ChatNavBarComponent } from "../chat-nav-bar/chat-nav-bar.component";
import { ChatThreadsComponent } from "../chat-threads/chat-threads.component";
import { ChatWindowComponent } from "../chat-window/chat-window.component";
@Component({
    moduleId: module.id,
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
