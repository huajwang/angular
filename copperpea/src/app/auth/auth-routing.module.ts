import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const authRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'resetPassword', component: ResetPasswordComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
