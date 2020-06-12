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

  categoryChanged = new Subject<string>();

  courseChanged = new Subject<Course>();
  coursesChanged = new Subject<Course[]>();
  courseLectureChanged = new Subject<CourseLecture[]>();

  constructor(private http: HttpClient) {}


  pyCourses: Course[] = [];
  courseContents: CourseContent[] = [];
  courseLectures: CourseLecture[] = [];

  getCourses(courseCategory: string) {
    const options = {
      params: new HttpParams().append('courseCategory', courseCategory)
    };
    this.http.get<Course[]>(this.courseUrl, options)
      .subscribe((courses: Course[]) => {
        this.pyCourses = courses;
        this.coursesChanged.next(this.pyCourses.slice());
        localStorage.setItem("courses", JSON.stringify(this.pyCourses));
      });
  }

  backToStart() {
    this.courseChanged.next(null);
  }

  getCategoryDesc(category: string) {
    return category;
  }

  getCourse(id: number) {
    this.courseChanged.next(this.pyCourses[id]);
    return JSON.parse(localStorage.getItem("courses"))[id];
  }

  getCourseLectures(courseId: number) {
    this.http.get<CourseLecture[]>(this.courseUrl + "/" + courseId.toString() + "/lectures")
      .subscribe((courseLectures: CourseLecture[]) => {
        this.courseLectures = courseLectures;
        this.courseLectureChanged.next(this.courseLectures);
      });
  }

}
