import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  person:any;

  ngOnInit(){
    this.person = {
      namet:"Rohit"
    }
  }
}
