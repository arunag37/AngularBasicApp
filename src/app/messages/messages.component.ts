import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public  messageService : MessageService) { }
  messages: string[] = [];

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.messages=this.messageService.messages;
  }

  clearMessages() {
    this.messageService.clear();
    this.getMessages();
  }

}
