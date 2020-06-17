import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";


const coursesRoutes: Routes = [
  {path: '', component: CoursesComponent},
  {path: ':courseName', component: CourseComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule {

}
