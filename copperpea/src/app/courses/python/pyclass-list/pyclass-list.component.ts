import { Component, OnInit,  OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { Course } from "../../course.model";
import { CourseService } from "../../course.service";

@Component({
  selector: 'app-pyclass-list',
  templateUrl: './pyclass-list.component.html',
  styleUrls: ['./pyclass-list.component.css']
})
export class PyclassListComponent implements OnInit, OnDestroy {

  courses: Course[] = [];
  subscription: Subscription;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.subscription = this.courseService.courseChanged.subscribe(
      (courses: Course[]) => {
        this.courses = courses;
        console.log(this.courses);
      }
    );
    this.courseService.getCourses('python');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
