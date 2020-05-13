import { Component, OnInit } from '@angular/core';

import { Article } from "./article.model";
import { BlogService } from "./blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: Article[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.fetchArticles();
    this.articles = this.blogService.getArticles();
  }

}
