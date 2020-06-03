import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class AuthService implements OnInit {
  token = null;
  username: String = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    );
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/me']);
        this.username = firebase.auth().currentUser.email;
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        )
      }
    )
    .catch(
      error => {
        console.log(error)
      }
    );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => { this.token = token; }
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
    this.token = null;
  }

  getUsername() {
    return this.username;
  }

}
