import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .text-copyright {
    display: flex;
    justify-content: center;
  }

  .img-linkedin, .img-github{
    width: 80px;
    height: 80px;
    margin: 5% 0% 0% 35%;
  }

  .img-github {
    background-color: white;
  }
  `]
})
export class AppComponent {}
