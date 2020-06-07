import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onResetPassword(f: NgForm) {
    const email = f.value.email;
    this.authService.resetPassword(email);
    this.router.navigate(['../signin'], {relativeTo: this.route});
  }

}
