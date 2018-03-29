import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootInfo = 'Hello from the root app !'

  showTimes(num) {
    document.getElementById('result').innerHTML = num;
  }
}
