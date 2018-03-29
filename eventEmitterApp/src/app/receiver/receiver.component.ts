import {Input , Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  @Input() receiveFromRoot: string;
  constructor() { }

  ngOnInit() {
  }

}
