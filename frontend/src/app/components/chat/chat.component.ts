import { Component, OnInit } from '@angular/core';
import { IMessage, PostMessage } from './../../models/message';
import { NetworkService } from './../../services/network.service';
import { NgForm } from '@angular/forms';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  conversation = [
    {
      avatar: "home",
      from: "Me",
      content: "Good evening, Sarath"
    }
  ];
  data: PostMessage = {
    url: "/message",
    msg: "Hello"
  }
  value: string = '';
  constructor(private networkService: NetworkService) { }

  ngOnInit() {
  }


  formSubmit(chatInput) {
    this.conversation.push({
      avatar: "perm_identity",
      from: "Me",
      content: chatInput.value
    })
    this.data.msg = chatInput.value;
    this.networkService.postMsg(this.data)
      .subscribe((response) => {
        console.log(response);
        chatInput.value = '';
      })

  }
}
