import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IMessage, PostMessage } from './../../models/message';
import { NetworkService } from './../../services/network.service';
import { TypingAnimationDirective } from 'angular-typing-animation'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ transform: 'translateY(500px)' }),
        animate(500)
      ])
    ])
  ]
})
export class ChatComponent {
  conversation = [{
    avatar: "home",
    from: "Me",
    content: "Good evening, Sarath",
    userMsg: false
  }];
  data: PostMessage = {
    url: "/message",
    msg: "Hello"
  }

  @ViewChild('chatfield') chatfield: ElementRef;

  constructor(private networkService: NetworkService, private renderer: Renderer2) { }

  ngOnInit() {
  }


  formSubmit(chatInput) {
    console.log(chatInput);
    this.conversation.push({
      avatar: "perm_identity",
      from: "Me",
      content: chatInput.value,
      userMsg: true
    })
    this.data.msg = chatInput.value;
    // this.networkService.postMsg(this.data)
    //   .subscribe((response) => {
    //     console.log(response);
    //     chatInput.value = '';
    //     
    //   })
    chatInput.value = '';
  }

}
