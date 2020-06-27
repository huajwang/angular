import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { Lesson } from "./lesson.model";
import { LessonLecture } from "./lesson-lecture.model";
import { BACK_END_ADDR } from "../shared/global";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class LessonService {

  lessonSelected = new EventEmitter<Lesson>();
  lessonChanged = new Subject<Lesson[]>();

  private lessons: Lesson[] = []

  constructor(private httpClient: HttpClient) {}

  getLessons() {
    return JSON.parse(localStorage.getItem('lessons'));
  }

  getLesson(id: number) {
    return this.lessons[id];
  }

  addLesson(lesson: Lesson): Observable<Lesson> {
    return this.httpClient.post<Lesson>(BACK_END_ADDR + '/course/add', lesson, httpOptions)
    .pipe(
      // catchError(this.handleError('addLesson', lesson))
    );
    // this.lessons = JSON.parse(localStorage.getItem('lessons')) || [];
    // this.lessons.push(lesson);
    // this.lessonChanged.next(this.lessons.slice());
    // localStorage.setItem('lessons', JSON.stringify(this.lessons));
  }

  updateLesson(index: number, lesson: Lesson) {
    this.lessons[index] = lesson;
    this.lessonChanged.next(this.lessons.slice());
  }

}
