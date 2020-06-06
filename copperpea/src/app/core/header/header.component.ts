import { Component, OnInit } from '@angular/core';
import { HttpResponse } from "@angular/common/http";
import { Subscription } from "rxjs";

import { StoreService } from "../../shared/store.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  first_layer_verify: boolean = false;
  second_layer_verify: boolean = false;
  subscription: Subscription;

  constructor(private storeService: StoreService,
              private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.first_layer_verify_changed.subscribe(
      (first_layer_verify: boolean) => {
        this.first_layer_verify = first_layer_verify;
      }
    );
    this.subscription = this.authService.second_layer_verify_changed.subscribe(
      (second_layer_verify: boolean) => {
        this.second_layer_verify = second_layer_verify;
      }
    );

  }

  storeData() {
    this.storeService.storeData().subscribe(
      (response: HttpResponse<any>) => {
        console.log(response.body);
      }
    );
  }

  fetchData() {
    this.storeService.fetchData();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }

}
