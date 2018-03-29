import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  @Output() emitter = new EventEmitter();
  clickTime = 0;
  messageFromSender = 'The message from sender sucessully received '
  constructor() { }
  messageSent() {
    this.clickTime = this.clickTime + 1;
    this.emitter.emit(this.messageFromSender + 'for  ' + this.clickTime + '    times!');
  }
  ngOnInit() {
  }

}
