import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .text-copyright {
    display: flex;
    justify-content: center;
  }

  .container-img {
    display: flex;
    justify-content: center;
  }

  .img-linkedin, .img-github{
    width: 80px;
    height: 80px;
  }

  .img-github {
    background-color: white;
  }
  `]
})
export class AppComponent { }