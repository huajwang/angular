import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCE5oL6N4qCe9UwkBifn1teT4XKCaE__G8",
      authDomain: "copperbean-54923.firebaseapp.com"
    });
  }

}
