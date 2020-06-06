import { NgModule } from "@angular/core";

import { TeacherRoutingModule } from "./teacher-routing.module";
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [TeacherComponent],
  imports: [TeacherRoutingModule]
})
export class TeacherModule {
}
