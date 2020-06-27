import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import { LessonService } from "../lesson.service";
import { Lesson } from "../lesson.model";

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  lessonForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private lessonService: LessonService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let lessonName = '';
    let lessonDesc = '';
    let category = '';
    let displayName = '';
    let price = 599.99;
    let previewUrl = '';
    let lessonIngredients = new FormArray([]);

    if (this.editMode) {
      const lson = this.lessonService.getLesson(this.id);
      lessonName = lson.lessonName;
      lessonDesc = lson.lessonDesc;
    }

    this.lessonForm = new FormGroup({
      lessonName: new FormControl(lessonName, Validators.required),
      lessonDesc: new FormControl(lessonDesc, Validators.required),
      displayName: new FormControl(displayName, Validators.required),
      category: new FormControl(category, Validators.required),
      price: new FormControl(price, Validators.required),
      previewUrl: new FormControl(previewUrl, Validators.required)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.lessonService.updateLesson(this.id, this.lessonForm.value);
    } else {
      this.lessonService.addLesson(this.lessonForm.value).subscribe(
        (lesson: Lesson) => {
          console.log(lesson);

        }
      );
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
