import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeacherComponent } from "./teacher/teacher.component";
import { TeacherAuthGuardService } from "../auth/teacher-auth-guard.service";


const teacherRoutes: Routes = [
  {path: '', component: TeacherComponent, canActivate: [TeacherAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(teacherRoutes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {

}
