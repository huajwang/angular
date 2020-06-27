import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CourseContentComponent } from "./course/course-content/course-content.component";


const coursesRoutes: Routes = [
  {path: '', component: CoursesComponent},
  {path: ':courseName', component: CourseComponent},
  {path: ':courseName/:partId', component: CourseContentComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule {

}
