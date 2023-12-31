import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormLayoutType } from 'ng-zorro-antd/form';

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

  userForm!: FormGroup<{
    layout: FormControl<NzFormLayoutType>,
    email: FormControl<string>,
    password: FormControl<string>
  }>;

  private readonly fb = inject(FormBuilder);

  ngOnInit(): void {
      this.userForm = this.fb.nonNullable.group({
        layout: ['vertical' as NzFormLayoutType, Validators.required],
        email: ['', [Validators.required, Validators.maxLength(7)]],
        password: ['', Validators.required]
      });
  }

  ngOnDestroy(): void {}

}
