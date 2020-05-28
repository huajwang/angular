import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MeComponent } from "./me.component";
import { MeCurrentComponent } from "./me-current/me-current.component";
import { MeStartComponent } from "./me-start/me-start.component";

const meRoutes: Routes = [
  {path: '', component: MeComponent, children: [
    {path: '', component: MeStartComponent },
    {path: 'current', component: MeCurrentComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(meRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class MeRoutingModule {

}
