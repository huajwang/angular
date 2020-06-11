import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ChatMessage } from "./chat.model";
import { ChatService } from "./chat.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('chatPopup') chatPopup: ElementRef;
  @ViewChild('box') box: ElementRef;

  webSocketEndPoint: string = 'http://121.199.12.135/api/copperpea-websocket';
  topic: string = "/topic/biztoc";
  stompClient: any;
  chatmsgs: ChatMessage[];
  subscription: Subscription;

  constructor(private renderer: Renderer2, private chatService: ChatService) { }

  ngOnInit(): void {
    this.subscription = this.chatService.chatChanged.subscribe(
      (chats: ChatMessage[]) => {
        this.chatmsgs = chats;
      }
    );
    this.chatmsgs = this.chatService.getMessages();
  }

  connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);

    // use () => syntax to avoid 'this' problem
    this.stompClient.connect({}, (frame) => {
            this.stompClient.subscribe(this.topic, (msg) => {
              this.onMessageReceived(msg.body);
            });
        }, this.errorCallBack);
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
      console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
          console.log("errorCallBack -> " + error)
          setTimeout(() => {
              this.connect();
          }, 5000);
      }

  onMessageReceived(message) {
          console.log("++++++Message Recieved from Server " + message);
          // When receiving data from a web server, the data is always a string.
          // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
          this.chatmsgs.push(new ChatMessage(1, 'biz', JSON.parse(message).content));

  }

  openChat() {
    this.renderer.setStyle(this.chatPopup.nativeElement, 'display', 'block');
    this.connect();

    // f.form.patchValue({msg: '你好， 欢迎!'});
  }

  onEnter(msg: string) {
    this.renderer.setProperty(this.box.nativeElement, 'value', '');
    let chatMsg = new ChatMessage(1, 'cus', msg);
    this.chatService.addMessage(chatMsg);
    this.stompClient.send("/app/ctobiz", {}, JSON.stringify(chatMsg));
  }

  miniChat() {
    this.renderer.setStyle(this.chatPopup.nativeElement, 'display', 'none');
  }
}
