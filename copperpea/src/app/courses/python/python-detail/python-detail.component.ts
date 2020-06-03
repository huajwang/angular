import { Component, OnInit, OnDestroy, ViewChild, ViewChildren, ElementRef, Renderer2, QueryList } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

import { Course } from "../../course.model";
import { CourseContent } from "../../course-content.model";
import { CourseLecture } from "../../course-lecture.model";
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
  courseLectures: CourseLecture[] = [];
  lectures_expanded: boolean = false;
  subscription: Subscription;
  videoUrl: String;
  videoTitle: String;

  @ViewChildren('lectures_container') lecture_container: QueryList<ElementRef>;
  @ViewChild('content_plus') content_plus: ElementRef;
  @ViewChild('content_minus') content_minus: ElementRef;
  @ViewChild('videoModal') videoModal: ElementRef;
  @ViewChild('video') video: ElementRef;

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
    this.subscription = this.courseService.courseLectureChanged.subscribe(
      (courseLectures: CourseLecture[]) => {
        this.courseLectures = courseLectures;
        console.log(this.courseLectures);
      }
    );

    this.courseService.getCourseContents(+this.course.courseId);
    this.courseService.getCourseLectures(+this.course.courseId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleLectures(idx: number) {
    console.log(this.lecture_container.length)
    this.lectures_expanded = !this.lectures_expanded;
    this.renderer.setStyle(this.lecture_container.toArray()[idx].nativeElement, 'display',
    this.lectures_expanded ? 'block': 'none');
    this.renderer.setStyle(this.content_plus.nativeElement, 'display',
    this.lectures_expanded ? 'none': 'block');
    this.renderer.setStyle(this.content_minus.nativeElement, 'display',
    this.lectures_expanded ? 'block': 'none');
  }

  playVideo(videoUrl: String, partName: String) {
    this.videoUrl = videoUrl;
    this.videoTitle = partName;
    console.log(videoUrl);
    this.video.nativeElement.load();
    this.renderer.setStyle(this.videoModal.nativeElement, 'display', 'block');
  }

  closeVideoModal() {
      this.renderer.setStyle(this.videoModal.nativeElement, 'display', 'none');
      this.video.nativeElement.pause();
  }

}
