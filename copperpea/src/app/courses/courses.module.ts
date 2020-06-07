import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoursesRoutingModule } from "./courses-routing.module";
import { CourseService } from "./course.service";
import { CoursesComponent } from './courses.component';
import { PythonComponent } from './python/python.component';
import { PyclassListComponent } from './python/pyclass-list/pyclass-list.component';
import { PyclassComponent } from './python/pyclass-list/pyclass/pyclass.component';
import { PythonStartComponent } from './python/python-start/python-start.component';
import { PythonDetailComponent } from './python/python-detail/python-detail.component';
import { SharedModule } from "../shared/shared.module";

@NgModule ({
  declarations: [
    CoursesComponent,
    PythonComponent,
    PyclassListComponent,
    PyclassComponent,
    PythonStartComponent,
    PythonDetailComponent
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
