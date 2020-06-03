import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from "../auth/auth.service";
import { Article } from "./article.model";

@Injectable()
export class MeService {
  meUrl = 'http://localhost:8080/edu/me/articles';
  articles: Article[];

  constructor(private http: HttpClient, private authService: AuthService) {}

  fetchArticles() {
    this.http.get<Article[]>(this.meUrl)
    .subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );
  }

  getArticles() {
    return this.articles;
  }

  getUsername() {
    return this.authService.getUsername();
  }
}
