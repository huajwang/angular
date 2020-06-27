import { Injectable, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subject } from "rxjs";

import * as firebase from 'firebase';
import { UserCoursePay } from "../courses/user-course-pay.model";
import * as Globals from "../shared/global";

@Injectable()
export class AuthService implements OnInit {
  token = null;
  username: string = '';
  paidStatusChanged = new Subject<boolean>();
  payCheckUrl = Globals.PAY_CHECK_URL;
  lookupTeacherUrl = Globals.LOOK_UP_TEACHER_URL;
  first_layer_verify: boolean = false;
  second_layer_verify: boolean = false;
  first_layer_verify_changed = new Subject<boolean>();
  second_layer_verify_changed = new Subject<boolean>();
  errorMsgChanged = new Subject<string>();

  constructor(private router: Router, private httpClient: HttpClient,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => console.log(error)
    );
  }

  async isTeacherAccount(email: string) {
    const options = {params: new HttpParams().append("teacherName", email)};
    return await this.httpClient.get<boolean>(this.lookupTeacherUrl, options).toPromise();
  }

  lookupTeacher(email: string) {
    const options = {params: new HttpParams().append("teacherName", email)};
    this.httpClient.get<boolean>(this.lookupTeacherUrl, options).subscribe(
      (isTeacher: boolean) => {
        if (isTeacher) {
          this.router.navigate(['/lessons']);
          this.second_layer_verify = true;
          this.second_layer_verify_changed.next(true);
        }
      }
    );
  }

  loginUser(email: string, password: string, studentLogin: boolean) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        if (studentLogin) {
          let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/me';
          this.router.navigateByUrl(returnUrl);
        } else {
          this.lookupTeacher(email);
        }
        this.first_layer_verify = true;
        this.first_layer_verify_changed.next(true);
        this.username = firebase.auth().currentUser.email;
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        )
      }
    )
    .catch(
      error => {
        // error.code
        this.errorMsgChanged.next(error.message);
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

  isTeacherAuthenticated() {
    return this.first_layer_verify && this.second_layer_verify;
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
    this.token = null;
    this.first_layer_verify_changed.next(false);
    this.second_layer_verify_changed.next(false);
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

  resetPassword(emailAddress: string): void {
    firebase.auth().sendPasswordResetEmail(emailAddress)
    .then(function() {
      // email sent
    })
    .catch(function() {
      console.log("send password reset email failed.")
    });
  }

}
