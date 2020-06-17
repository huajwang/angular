import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FileService } from  '../../shared/file.service';
import { TeacherService } from "../teacher.service";
import { Course } from "../../courses/course.model";


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @ViewChild("fileUploadInput", {static: false}) fileUploadInput: ElementRef;
  files = [];

  constructor(private fileService: FileService,
              private teacherService: TeacherService) {}





  ngOnInit(): void {
    this.teacherService.stageCoursesChanged.subscribe(
      (courses: Course[]) => {
        console.log(courses[0]);
      }
    );
    this.teacherService.getStageCourses('cse63152@gmail.com');
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.fileService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }

  private uploadFiles() {
    this.fileUploadInput.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  onClick() {
      const fileUploadInput = this.fileUploadInput.nativeElement;
      fileUploadInput.onchange = () => {
        for (let index = 0; index < fileUploadInput.files.length; index++)
        {
            const file = fileUploadInput.files[index];
            this.files.push({ data: file, inProgress: false, progress: 0});
        }
        this.uploadFiles();
        };
      fileUploadInput.click();
  }

  onAddItem() {
    
  }
}
