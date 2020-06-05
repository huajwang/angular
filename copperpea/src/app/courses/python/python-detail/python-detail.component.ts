import { Component, OnInit, OnDestroy, ViewChild, ViewChildren, ElementRef, Renderer2, QueryList } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

import { Course } from "../../course.model";
import { CourseLecture } from "../../course-lecture.model";
import { LecturePart } from "../../lecture-part.model";
import { CourseService } from "../../course.service";
import { AuthService } from "../../../auth/auth.service";

@Component({
  selector: 'app-python-detail',
  templateUrl: './python-detail.component.html',
  styleUrls: ['./python-detail.component.css']
})
export class PythonDetailComponent implements OnInit, OnDestroy {

  id: number = 0;
  course: Course;
  paidStatus: boolean = false;
  courseLectures: CourseLecture[] = [];
  lectures_expanded: boolean[] = [];
  subscription: Subscription;

  lecturePart_type: number;
  videoUrl: String;
  title: String;
  part_content: String = "";

  url_category: string;
  url_index: string;

  @ViewChildren('lectures_container') lectures_container: QueryList<ElementRef>;
  @ViewChildren('content_plus') content_plus: QueryList<ElementRef>;
  @ViewChildren('content_minus') content_minus: QueryList<ElementRef>;
  @ViewChild('videoModal') videoModal: ElementRef;
  @ViewChild('textModal') textModal: ElementRef;
  @ViewChild('video') video: ElementRef;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private renderer: Renderer2,
              private authService: AuthService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.course = this.courseService.getCourse(this.id);
      }
    );

    this.courseService.courseChanged.subscribe(
      (course: Course) => {
        // get lectures of the new course
        this.courseService.getCourseLectures(course.courseId);
        if (this.isAuthenticated()) {
          this.authService.isCoursePaid(course.courseId);
        }

      }
    );


    this.subscription = this.courseService.courseLectureChanged.subscribe(
      (courseLectures: CourseLecture[]) => {
        this.courseLectures = courseLectures;
      }
    );

    this.subscription = this.authService.paidStatusChanged.subscribe(
      (paidStatus) => {
        this.paidStatus = paidStatus;
        console.log(this.paidStatus);
      }
    );

    if (!this.course) { // if access address directly by e.g. /courses/python/0
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleLectures(idx: number) {
    this.lectures_expanded[idx] = !this.lectures_expanded[idx];
    this.renderer.setStyle(this.lectures_container.toArray()[idx].nativeElement, 'display',
    this.lectures_expanded[idx] ? 'block': 'none');
    this.renderer.setStyle(this.content_plus.toArray()[idx].nativeElement, 'display',
    this.lectures_expanded[idx] ? 'none': 'block');
    this.renderer.setStyle(this.content_minus.toArray()[idx].nativeElement, 'display',
    this.lectures_expanded[idx] ? 'block': 'none');
  }

  play(lecturePart: LecturePart) {
    this.lecturePart_type = lecturePart.type;
    this.title = lecturePart.partName;
    if (lecturePart.type == 1) {
      this.videoUrl = lecturePart.videoUrl;
      this.video.nativeElement.load();
      this.renderer.setStyle(this.videoModal.nativeElement, 'display', 'block');
      this.video.nativeElement.play();
    } else {

      for (let lpc of lecturePart.lecturePartContents) {
          this.part_content = this.part_content.concat(lpc.partContent.toString());
      }
      this.renderer.setStyle(this.textModal.nativeElement, 'display', 'block');
    }

  }

  closeVideoModal() {
      this.renderer.setStyle(this.videoModal.nativeElement, 'display', 'none');
      this.video.nativeElement.pause();
  }

  closeTextModal() {
      this.renderer.setStyle(this.textModal.nativeElement, 'display', 'none');
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
