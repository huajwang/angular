import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { AuthRoutingModule } from "./auth-routing.module";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ResetPasswordComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
