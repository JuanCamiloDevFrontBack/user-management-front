import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  footer {
    margin-top: 15px;
  }

  .text-copyright {
    text-align: center;
  }

  .container-img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-linkedin, .img-github{
    width: 70px;
    height: 70px;
  }
  `]
})
export class AppComponent { }