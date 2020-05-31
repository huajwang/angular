import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

import { Course } from "./course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = 'http://localhost:8080/edu/courses';
  courseChanged = new Subject<Course[]>();
  constructor(private http: HttpClient) {}


  pyCourses: Course[] = [];

  getCourses(courseName: String) {
    this.http.get<Course[]>(this.courseUrl)
      .subscribe((courses: Course[]) => {
        this.pyCourses = courses;
        this.courseChanged.next(this.pyCourses.slice());
      });
  }


  getCourse(id: number) {
    return this.pyCourses[id];
  }
}
