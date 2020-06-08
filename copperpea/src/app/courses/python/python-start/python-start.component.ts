import { Component, OnInit } from '@angular/core';
import { CourseService } from "../../course.service";

@Component({
  selector: 'app-python-start',
  templateUrl: './python-start.component.html',
  styleUrls: ['./python-start.component.css']
})
export class PythonStartComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // now, page is in the start component
    this.courseService.backToStart();
  }

}
