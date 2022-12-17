import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  myProperty = "<strong>Hello</strong>, What's up?<script>alert('kuku!)</script>";
  myText = "sample text no. 1"

  date = new Date()
  
}
