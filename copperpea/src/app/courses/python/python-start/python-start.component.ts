import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { CourseService } from "../../course.service";

@Component({
  selector: 'app-python-start',
  templateUrl: './python-start.component.html',
  styleUrls: ['./python-start.component.css']
})
export class PythonStartComponent implements OnInit {

  desc: string;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        let category = params['category']
        this.desc = this.courseService.getCategoryDesc(category);
      }
    );
    // now, page is in the start component
    this.courseService.backToStart();
  }

}
