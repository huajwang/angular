import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FileService } from "../../../shared/file.service";

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseContentComponent implements OnInit {

  article: string = "";

  constructor(private fileService: FileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        let articleUrl = params['articleUrl'];
        this.fileService.articleChanged.subscribe(
          (data: string) => {
            this.article = data;
          }
        );
        this.fileService.getArticle(articleUrl);
      }
    );

  }

}
