import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from "./article.model";

@Injectable()
export class BlogService {
  blogUrl = 'http://localhost:8080/edu/blog/articles';
  articles: Article[];

  constructor(private http: HttpClient) {}

  fetchArticles() {
    this.http.get<Article[]>(this.blogUrl)
    .subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );
  }

  getArticles() {
    return this.articles;
  }
}
