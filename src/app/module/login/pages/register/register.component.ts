import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private readonly router = inject(Router);

  backScreen(): void {
    this.router.navigate(['login']);
  }

}
