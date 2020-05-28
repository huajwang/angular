import { Component, OnInit } from '@angular/core';

import { Article } from "./article.model";
import { MeService } from "./me.service";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  articles: Article[];

  constructor(private meService: MeService) { }

  ngOnInit(): void {
    this.meService.fetchArticles();
    this.articles = this.meService.getArticles();
  }

}
