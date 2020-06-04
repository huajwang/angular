import { Component, Input, OnInit } from '@angular/core';
import { Course } from "../../../course.model";
import { CourseService } from "../../../course.service";

@Component({
  selector: 'app-pyclass',
  templateUrl: './pyclass.component.html',
  styleUrls: ['./pyclass.component.css']
})
export class PyclassComponent implements OnInit {

  @Input() course: Course;
  @Input() index: number;

   constructor(private courseService: CourseService) {}

  ngOnInit(): void {
  }

  // isFoo(candy){
  //   return candy instanceof Course;
  // }

  changeCourse() {
    this.courseService.getCourseContents(this.course.courseId);
    this.courseService.getCourseLectures(this.course.courseId);

  }
}
