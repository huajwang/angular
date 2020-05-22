import { Component, Input, OnInit } from '@angular/core';
import { Course } from "../../../course.model";

@Component({
  selector: 'app-pyclass',
  templateUrl: './pyclass.component.html',
  styleUrls: ['./pyclass.component.css']
})
export class PyclassComponent implements OnInit {

  @Input() course: Course;
  @Input() index: number;

  ngOnInit(): void {
  }

  isFoo(candy){
    return candy instanceof Course;
  }

}
