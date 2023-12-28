import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  footer {
    margin-top: 15px;
  }

  .text-copyright {
    display: flex;
    justify-content: center;
  }

  .container-img {
    display: flex;
    justify-content: center;
  }

  .img-linkedin, .img-github{
    width: 70px;
    height: 70px;
    border-radius: 10%;
  }

  .img-github {
    background-color: white;
  }
  `]
})
export class AppComponent { }