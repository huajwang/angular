import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import * as Globals from "./global";

@Injectable()
export class FileService {

  SERVER_URL: string = "https://file.io/";
  articleChanged = new Subject();

  constructor(private httpClient: HttpClient) {
  }

  public upload(formData) {
    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  public getArticle(articleUrl: string) {
    this.httpClient.get(Globals.OSS_ARTICLE_URL + articleUrl, {responseType: 'text'}).subscribe(
      (data) => {
        this.articleChanged.next(data);
      }
    );
  }

}
