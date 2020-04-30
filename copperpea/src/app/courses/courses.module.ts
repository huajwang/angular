import { NgModule } from "@angular/core";

import { CoursesRoutingModule } from "./courses-routing.module";
import { CompetitionComponent } from "./competition/competition.component";
import { JuniorComponent } from "./junior/junior.component";
import { CoursesComponent } from './courses.component';

@NgModule ({
  declarations: [
    CompetitionComponent,
    JuniorComponent,
    CoursesComponent
  ],
  imports: [
    CoursesRoutingModule
  ]
})
export class CoursesModule {

}
