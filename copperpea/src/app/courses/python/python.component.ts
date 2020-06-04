import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { CourseService } from "../course.service";

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  category: string;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.category = params['category'];
        this.courseService.categoryChanged.next(this.category);
      }
    );
  }

}
