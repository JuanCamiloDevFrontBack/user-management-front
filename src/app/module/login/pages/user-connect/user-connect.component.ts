import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormLayoutType } from 'ng-zorro-antd/form';
import { LoginE } from 'src/app/interfaces/login/login.enum';
import { LoginI } from 'src/app/interfaces/login/login.interface';

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

  userE: any = LoginE;
  userForm!: FormGroup<LoginI>;

  private readonly fb = inject(FormBuilder);

  ngOnInit(): void {
      this.userForm = this.fb.nonNullable.group({
        [LoginE.email]: ['', [Validators.required, Validators.maxLength(7)]],
        [LoginE.password]: ['', Validators.required]
      });
  }

  ngOnDestroy(): void {}

  sendFormHttp(): void {
    alert(JSON.stringify(this.userForm.value, null, 2));
  }

}
