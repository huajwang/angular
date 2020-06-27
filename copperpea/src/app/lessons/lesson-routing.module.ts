import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LessonsComponent } from "./lessons.component";
import { LessonStartComponent } from "./lesson-start/lesson-start.component";
import { LessonDetailComponent } from "./lesson-detail/lesson-detail.component";
import { LessonEditComponent } from "./lesson-edit/lesson-edit.component";
import { AuthGuardService } from "../auth/auth-guard.service";

const lessonsRoutes: Routes = [
  {path: '', component: LessonsComponent, children: [
    {path: '', component: LessonStartComponent },
    {path: 'new', component: LessonEditComponent, canActivate: [AuthGuardService]},
    {path: ':id', component: LessonDetailComponent},
    {path: ':id/edit', component: LessonEditComponent, canActivate: [AuthGuardService]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(lessonsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class LessonRoutingModule {}
