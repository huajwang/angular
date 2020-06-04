import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { Course } from "../../course.model";
import { CourseService } from "../../course.service";

@Component({
  selector: 'app-pyclass-list',
  templateUrl: './pyclass-list.component.html',
  styleUrls: ['./pyclass-list.component.css']
})
export class PyclassListComponent implements OnInit, OnDestroy {

  @Input() category: string;
  courses: Course[] = [];
  subscription: Subscription;

  category_subscription: Subscription;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.category_subscription = this.courseService.categoryChanged.subscribe(
      (category: string) => {
        this.courseService.getCourses(category);
      }
    );
    this.subscription = this.courseService.coursesChanged.subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    );
    this.courseService.getCourses(this.category);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.category_subscription.unsubscribe();
  }

}
