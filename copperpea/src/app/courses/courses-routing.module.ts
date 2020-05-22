import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CoursesComponent } from "./courses.component";
import { PythonComponent } from "./python/python.component";
import { JuniorComponent } from "./junior/junior.component";
import { InterviewComponent } from "./interview/interview.component";
import { PythonStartComponent } from "./python/python-start/python-start.component";
import { PythonDetailComponent } from "./python/python-detail/python-detail.component";

const coursesRoutes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'python', component: PythonComponent, children:[
    {path: '', component: PythonStartComponent},
    {path: ':id', component: PythonDetailComponent},
  ]},
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
