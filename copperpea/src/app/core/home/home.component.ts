import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from "@angular/forms";
// import { webSocket } from "rxjs/webSocket";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { HelloMessage } from "./hello.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('chatPopup') chatPopup: ElementRef;
  @ViewChild('box') box: ElementRef;

  webSocketEndPoint: string = 'http://localhost:8080/copperpea-websocket';
  topic: string = "/topic/biztoc";
  stompClient: any;

  //let subject = new WebSocket("ws://localhost:8080/greeting");

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    // this.stompClient.connect({}, function (frame) {
    //         this.subscribe(this.topic, function (greeting) {
    //             this.onMessageReceived(greeting);
    //         });
    //         this.reconnect_delay = 2000;
    //     }, this.errorCallBack);


    this.stompClient.connect({}, function (frame) {
            console.log('------Connected: ' + frame);
            this.subscribe("/topic/biztoc", function (greeting) {
              console.log("------received from Spring backend: " + greeting.body)
              // onMessageReceived(greeting);
            });
        });



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
          // setTimeout(() => {
          //     connect();
          // }, 5000);
      }

      onMessageReceived(message) {
          console.log("++++++Message Recieved from Server " + message);
          // this.appComponent.handleMessage(JSON.stringify(message.body));
      }

  openChat() {
    //this.chatPopup.nativeElement.style.display="block"
    this.renderer.setStyle(this.chatPopup.nativeElement, 'display', 'block');
    this.connect();

    // f.form.patchValue({msg: '你好， 欢迎!'});
  }

  onEnter(msg: string) {
    this.renderer.setProperty(this.box.nativeElement, 'value', '');
    let data = JSON.stringify(new HelloMessage(msg));
    this.stompClient.send("/app/ctobiz", {}, data);
  }

  miniChat() {
    this.renderer.setStyle(this.chatPopup.nativeElement, 'display', 'none');
  }

}
