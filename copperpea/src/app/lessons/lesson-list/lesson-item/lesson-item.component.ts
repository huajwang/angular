import { Component, Input } from '@angular/core';
import { Lesson } from "../../lesson.model";

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.css']
})
export class LessonItemComponent {

  @Input() lesson: Lesson;
  @Input() index: number;

}
