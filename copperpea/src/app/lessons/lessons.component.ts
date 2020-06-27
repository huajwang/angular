import { Component, OnInit } from '@angular/core';
import { Lesson } from "./lesson.model";
import { LessonService } from "./lesson.service";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
  providers: [LessonService]
})
export class LessonsComponent implements OnInit {

  selectedLesson: Lesson;
  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
    this.lessonService.lessonSelected.subscribe(
      (lesson: Lesson) => {
        this.selectedLesson = lesson;
    });
  }

}
