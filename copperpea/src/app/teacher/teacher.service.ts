import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Subject } from "rxjs";

import { Course } from "../courses/course.model";
import * as Globals from "../shared/global"


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  stageCourseUrl = Globals.STAGE_COURSE_URL;
  stageCoursesChanged = new Subject<Course[]>();
  stageCourses: Course[] = [];

  constructor(private httpClient: HttpClient) { }

  getStageCourses(teacherAccount: string) {
    const options = { params: new HttpParams().append('teacherAccount', teacherAccount) };
    this.httpClient.get<Course[]>(this.stageCourseUrl, options).subscribe(
      (courses: Course[]) => {
        this.stageCourses = courses;
        this.stageCoursesChanged.next(courses);
      }
    );
  }
}
