import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from "rxjs";

import { Course } from "./course.model";
import { CourseContent } from "./course-content.model";
import { CourseLecture } from "./course-lecture.model";
import * as Globals from '../shared/global';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = Globals.COURSE_URL;

  courseChanged = new Subject<Course>();
  courseLectureChanged = new Subject<CourseLecture[]>();

  constructor(private http: HttpClient) {}

  courseContents: CourseContent[] = [];
  courseLectures: CourseLecture[] = [];

  getCourse(courseName: string) {
    const options = {
      params: new HttpParams().append('courseName', courseName)
    };
    this.http.get<Course>(this.courseUrl, options)
      .subscribe(
        (course: Course) => {
          this.courseChanged.next(course);
          localStorage.setItem(courseName.trim(), JSON.stringify(course));
        }
      );
  }

  getCurrentCourse(courseName: string) {
    return JSON.parse(localStorage.getItem(courseName.trim()));
  }

  getCourseLectures(courseId: number) {
    this.http.get<CourseLecture[]>(this.courseUrl + "/" + courseId.toString() + "/lectures")
      .subscribe((courseLectures: CourseLecture[]) => {
        this.courseLectures = courseLectures;
        this.courseLectureChanged.next(this.courseLectures);
      });
  }

}
