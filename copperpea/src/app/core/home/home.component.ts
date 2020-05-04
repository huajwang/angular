import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('chatPopup') chatPopup: ElementRef;
  @ViewChild('box') box: ElementRef;

  private conversations = [
    {who: 'host', sentence: 'Hello. How are you today?'},
    {who: 'guest', sentence: 'Can you help me?'}
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  openChat() {
    //this.chatPopup.nativeElement.style.display="block"
    this.renderer.setStyle(this.chatPopup.nativeElement, 'display', 'block');
    // f.form.patchValue({msg: '你好， 欢迎!'});
  }

  onEnter(value: String) {
    this.conversations.push({who: 'guest', sentence: value});
    // this.box.nativeElement.value = "";
    this.renderer.setProperty(this.box.nativeElement, 'value', '');
  }

  // closeForm() {
  //   this.renderer.setStyle(this.chatPopup.nativeElement, 'display', 'none');
  // }
  //
  // onSent(f: NgForm) {
  //   console.log(f.value.msg);
  // }
}
