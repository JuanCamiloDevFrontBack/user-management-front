import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.css']
})

/*
Ejemplo de internet que voy a utilizar para acoplarlo a la sección de la imagen
esto para que no se renderice un elemtno cunaod no se necesite.
@Component({
  // ...
  
  host: {
    class: 'host-events',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(window:resize)': 'onWindowResize()'
  }
})
export class HostEventsComponent {

  // ...

  onWindowResize() {
    console.log('Window resized');
  }

}*/
export class UserConnectComponent implements OnInit, OnDestroy {

  userForm!: FormGroup;

  private readonly fb = inject(FormBuilder);

  ngOnInit(): void {
      this.userForm = this.fb.nonNullable.group({
        email: ['', [Validators.required, Validators.maxLength(7)]],
        password: ['', Validators.required]
      });
  }

  ngOnDestroy(): void {}

}
