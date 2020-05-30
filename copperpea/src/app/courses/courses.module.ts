import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoursesRoutingModule } from "./courses-routing.module";
import { CourseService } from "./course.service";
import { JuniorComponent } from "./junior/junior.component";
import { CoursesComponent } from './courses.component';
import { InterviewComponent } from './interview/interview.component';
import { PythonComponent } from './python/python.component';
import { PyclassListComponent } from './python/pyclass-list/pyclass-list.component';
import { PyclassComponent } from './python/pyclass-list/pyclass/pyclass.component';
import { PythonStartComponent } from './python/python-start/python-start.component';
import { PythonDetailComponent } from './python/python-detail/python-detail.component';

@NgModule ({
  declarations: [
    JuniorComponent,
    CoursesComponent,
    InterviewComponent,
    PythonComponent,
    PyclassListComponent,
    PyclassComponent,
    PythonStartComponent,
    PythonDetailComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
  ],
  providers: [CourseService]
})
export class CoursesModule {

}
