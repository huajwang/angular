import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from "./course.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = 'http://localhost:8080/edu/course_content';
  constructor(private http: HttpClient) {}


  pyCourses: Course[] = [
    new Course("Python入门", "学会分析抽象问题与解决抽象问题的能力。", "/assets/img/python.jpg"),
    new Course("Python进阶", "进一步提升计算思维，熟练掌握分析抽象问题和解决抽象问题能力。", "/assets/img/python.jpg"),
    new Course("Python竞赛", "强化实战中的计算思维，熟练掌握在实战中去计算思维去发现问题、分析问题和解决问题的能力。", "/assets/img/python.jpg")
  ];

  getCourses(courseName: String) {
    if (courseName == 'python') {
        return this.pyCourses;
    }
    else if (courseName == 'java')
      return [];
    else
      return [];
  }


  getCourse(id: number) {
    return this.pyCourses[id];
  }
}
