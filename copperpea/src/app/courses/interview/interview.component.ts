import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { AnsMessage } from "./ans.model";

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  webSocketEndPoint: string = 'http://localhost:8080/edu/copperpea-websocket';
  topic: string = "/topic/biztoc";
  stompClient: any;

  constructor() { }

  ngOnInit(): void {
    this.connect();
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


  }

  onEnter(msg: string) {
    let chatMsg = new AnsMessage(1, 'cus', msg);
    this.stompClient.send("/app/totutor", {}, JSON.stringify(chatMsg));
  }

}
