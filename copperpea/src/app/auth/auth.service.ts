import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs";

import * as firebase from 'firebase';
import { UserCoursePay } from "../courses/user-course-pay.model";

@Injectable()
export class AuthService implements OnInit {
  token = null;
  username: string = '';
  paidStatusChanged = new Subject<boolean>();
  payCheckUrl = "http://localhost:8080/edu/payCheck";

  constructor(private router: Router, private httpClient: HttpClient) {}

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

  isCoursePaid(courseId: number) {
    if (this.isAuthenticated()) {
      const user_name = this.username;
      const options = {
        params: new HttpParams().append('username', user_name).append('courseId', courseId.toString())
      };

      this.httpClient.get<UserCoursePay[]>(this.payCheckUrl, options).subscribe(
        (paidCourses: UserCoursePay[]) => {
          let paidStatus = false;
          for (let paidCourse of paidCourses) {
            if (paidCourse.courseId == courseId) {
              paidStatus = true;
              break;
            }
          }
          this.paidStatusChanged.next(paidStatus);
        }
      );

    } else {
      return false;
    }
  }
}
