import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LessonRoutingModule } from "./lesson-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LessonsComponent } from './lessons.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonItemComponent } from './lesson-list/lesson-item/lesson-item.component';
import { LessonStartComponent } from './lesson-start/lesson-start.component';
import { LessonEditComponent } from './lesson-edit/lesson-edit.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

@NgModule({
  declarations: [
    LessonsComponent,
    LessonListComponent,
    LessonDetailComponent,
    LessonItemComponent,
    LessonStartComponent,
    LessonEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LessonRoutingModule,
    SharedModule
  ]
})
export class LessonModule {

}
