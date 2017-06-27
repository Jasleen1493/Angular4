import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : '<h1>{{myObject.name}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 app';

  myObject = {
  name : 'Jasleen',
  gender : 'female',
  age : 24,
  location : 'new delhi'
  }
}
