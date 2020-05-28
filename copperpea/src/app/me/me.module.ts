import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MeRoutingModule } from "./me-routing.module";
import { MeComponent } from "./me.component";
import { MeCurrentComponent } from './me-current/me-current.component';
import { MeStartComponent } from './me-start/me-start.component';

@NgModule({
  declarations: [
    MeComponent,
    MeCurrentComponent,
    MeStartComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule {}
