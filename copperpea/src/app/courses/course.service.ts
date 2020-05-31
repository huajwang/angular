import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

import { Course } from "./course.model";
import { CourseContent } from "./course-content.model";
import { CourseLecture } from "./course-lecture.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = 'http://localhost:8080/edu/courses';
  courseContentUrl = 'http://localhost:8080/edu/course_content';
  courseLectureUrl = 'http://localhost:8080/edu/courses/1/lectures';
  courseChanged = new Subject<Course[]>();
  courseContentChanged = new Subject<CourseContent[]>();
  courseLectureChanged = new Subject<CourseLecture[]>();

  constructor(private http: HttpClient) {}


  pyCourses: Course[] = [];
  courseContents: CourseContent[] = [];
  courseLectures: CourseLecture[] = [];

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

  getCourseContents(courseId: number) {
    this.http.get<CourseContent[]>(this.courseContentUrl)
      .subscribe((courseContents: CourseContent[]) => {
        this.courseContents = courseContents;
        this.courseContentChanged.next(this.courseContents.slice());
      });
  }

  getCourseLectures(courseId: number) {
    this.http.get<CourseLecture[]>(this.courseLectureUrl)
      .subscribe((courseLectures: CourseLecture[]) => {
        this.courseLectures = courseLectures;
        this.courseLectureChanged.next(this.courseLectures.slice());
      });
  }

}
