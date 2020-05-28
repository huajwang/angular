import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MeComponent } from "./me.component";

const meRoutes: Routes = [
  {path: '', component: MeComponent, children: [
    {path: '', component: MeComponent },
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
