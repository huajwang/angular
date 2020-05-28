import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "./shared/shared.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { MeModule } from "./me/me.module";

import { AppComponent } from './app.component';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { StoreService } from "./shared/store.service";
import { AuthService } from "./auth/auth.service";
import { ChatService } from "./core/home/chat.service";
import { MeService } from "./me/me.service";

import { AppRoutingModule } from "./app-routing.module";
import { AuthGuardService } from "./auth/auth-guard.service";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    MeModule
  ],
  providers: [ShoppingListService, RecipeService,
              StoreService, AuthService, AuthGuardService, ChatService, MeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
