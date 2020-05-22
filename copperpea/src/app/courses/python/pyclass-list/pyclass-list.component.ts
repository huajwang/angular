import { Component, OnInit } from '@angular/core';
import { Course } from "../../course.model";
import { CourseService } from "../../course.service";

@Component({
  selector: 'app-pyclass-list',
  templateUrl: './pyclass-list.component.html',
  styleUrls: ['./pyclass-list.component.css']
})
export class PyclassListComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses('python');
  }

}
