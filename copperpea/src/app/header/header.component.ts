import { Component } from '@angular/core';
import { HttpResponse } from "@angular/common/http";

import { StoreService } from "../shared/store.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private storeService: StoreService) {}

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
}
