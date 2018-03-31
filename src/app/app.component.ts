import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular JS';
  msg = "Hello !!!";
  website = [{
    name: "hardik Website",
    url: "hardik.com"
  },
  {
    name:"Tani Website",
    contenttype: "text",
    url: "tani.com"
  }
]

}
