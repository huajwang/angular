import { NgModule } from "@angular/core";

import { AppRoutingModule } from "../app-routing.module";

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule {}
