import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Lesson } from '../lesson.model';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  lessons: Lesson[]

  constructor(private lessonService: LessonService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.lessonService.lessonChanged.subscribe(
      (lessons: Lesson[]) => {
        this.lessons = lessons;
      }
    );
    this.lessons = this.lessonService.getLessons();
  }

  newLesson() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
