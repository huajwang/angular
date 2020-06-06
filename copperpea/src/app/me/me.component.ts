import { Component, OnInit } from '@angular/core';
import { MeService } from "./me.service";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  username: String;

  constructor(private meService: MeService) { }

  ngOnInit(): void {
    this.username = this.meService.getUsername();
  }


}
