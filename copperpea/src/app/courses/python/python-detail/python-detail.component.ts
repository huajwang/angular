import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Course } from "../../course.model";
import { CourseService } from "../../course.service";

@Component({
  selector: 'app-python-detail',
  templateUrl: './python-detail.component.html',
  styleUrls: ['./python-detail.component.css']
})
export class PythonDetailComponent implements OnInit {

  id: number;
  course: Course;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.course = this.courseService.getCourse(this.id);
      }
    );
  }

}
