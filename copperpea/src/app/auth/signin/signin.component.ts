import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  student_login: boolean = true;
  errorMsg: string ="";
  subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.errorMsgChanged.subscribe(
    (errorMsg: string) => {
      this.errorMsg = "账号或者密码错误!";
    }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // mark login as async as we use await to make this call somewhat sync call
  async login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    // first check if account is in student or teacher accounts
    if (!this.student_login) {
      // wait the Http service call return
      let isTeacherAccount: boolean = await this.authService.isTeacherAccount(email);
      if (!isTeacherAccount) {
        console.log('this is not teacher account');
        this.errorMsg = "该教师账号不存在!";
        // TODO show error message on signin dialog
        return;
      }
    }

    this.authService.loginUser(email, password, this.student_login);
  }

  studentLogin() {
    this.student_login = true;
  }

  teacherLogin() {
    this.student_login = false;
  }
}
