import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoursesRoutingModule } from "./courses-routing.module";
import { CourseService } from "./course.service";
import { CoursesComponent } from './courses.component';
import { SharedModule } from "../shared/shared.module";
import { CourseComponent } from './course/course.component';
import { CourseContentComponent } from './course/course-content/course-content.component';

@NgModule ({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseContentComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  providers: [CourseService]
})
export class CoursesModule {

}
