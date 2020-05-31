import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

import { Course } from "../../course.model";
import { CourseContent } from "../../course-content.model";
import { CourseService } from "../../course.service";

@Component({
  selector: 'app-python-detail',
  templateUrl: './python-detail.component.html',
  styleUrls: ['./python-detail.component.css']
})
export class PythonDetailComponent implements OnInit, OnDestroy {

  id: number;
  course: Course;
  courseContents: CourseContent[] = [];
  lectures_expanded: boolean = false;
  subscription: Subscription;

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
    this.subscription = this.courseService.courseContentChanged.subscribe(
      (courseContents: CourseContent[]) => {
        this.courseContents = courseContents;
      }
    );
    this.courseService.getCourseContent(1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleLectures() {
    this.lectures_expanded = !this.lectures_expanded;
    this.renderer.setStyle(this.lecture_container.nativeElement, 'display',
    this.lectures_expanded ? 'block': 'none');
    this.renderer.setStyle(this.content_plus.nativeElement, 'display',
    this.lectures_expanded ? 'none': 'block');
    this.renderer.setStyle(this.content_minus.nativeElement, 'display',
    this.lectures_expanded ? 'block': 'none');
  }

}
