import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from "../auth/auth.service";
import { Article } from "./article.model";

@Injectable()
export class MeService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUsername() {
    return this.authService.getUsername();
  }
}
