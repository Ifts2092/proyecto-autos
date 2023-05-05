import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-autos';


  constructor(public router : Router) {}

  ngOnInit() {
      this.router.url;
      console.log(this.router.url);
  }

}
