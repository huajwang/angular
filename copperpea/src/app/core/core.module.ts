import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "../app-routing.module";

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {}
