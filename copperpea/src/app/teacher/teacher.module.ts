import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TeacherRoutingModule } from "./teacher-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [TeacherComponent],
  imports: [TeacherRoutingModule, CommonModule, SharedModule]
})
export class TeacherModule {
}
