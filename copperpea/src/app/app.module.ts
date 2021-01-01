import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { MeModule } from "./me/me.module";
import { TeacherModule } from "./teacher/teacher.module";
import { LessonModule } from "./lessons/lesson.module";

import { AppComponent } from './app.component';
import { AuthService } from "./auth/auth.service";
import { ChatService } from "./core/home/chat.service";
import { MeService } from "./me/me.service";
import { FileService } from "./shared/file.service";

import { AppRoutingModule } from "./app-routing.module";
import { AuthGuardService } from "./auth/auth-guard.service";
import { TeacherAuthGuardService } from "./auth/teacher-auth-guard.service";
import { DownloadComponent } from './download/download.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    MeModule,
    TeacherModule,
    FontAwesomeModule
  ],
  providers: [AuthService, AuthGuardService, ChatService, MeService,
              TeacherAuthGuardService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
