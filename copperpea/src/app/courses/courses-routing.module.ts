import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CoursesComponent } from "./courses.component";
import { CompetitionComponent } from "./competition/competition.component";
import { JuniorComponent } from "./junior/junior.component";
import { InterviewComponent } from "./interview/interview.component";

const coursesRoutes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'ccc', component: CompetitionComponent},
  {path: 'junior', component: JuniorComponent},
  {path: 'interview', component: InterviewComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule {

}
