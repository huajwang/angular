import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  @ViewChild('lectures_container') lecture_container: ElementRef;
  @ViewChild('content_plus') content_plus: ElementRef;
  @ViewChild('content_minus') content_minus: ElementRef;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.course = this.courseService.getCourse(this.id);
      }
    );
  }

  expandLectures() {
      this.renderer.setStyle(this.lecture_container.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.content_plus.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.content_minus.nativeElement, 'display', 'block');
  }

}
