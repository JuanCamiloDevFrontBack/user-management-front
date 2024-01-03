import { Component, OnDestroy, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginE } from 'src/app/interfaces/login/login.enum';
import { LoginI } from 'src/app/interfaces/login/login.interface';

@Component({
  selector: 'app-user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    id: 'host-heigth-component',
    '(window:resize)': 'showSectionImg()'
  }
})
export class UserConnectComponent implements OnInit, OnDestroy {

  isVisible!: boolean;
  userE: any = LoginE;
  userForm!: FormGroup<LoginI>;

  private readonly fb = inject(FormBuilder);

  ngOnInit(): void {
    /* Nota: Se invoca el método showSectionImg() para detectar las dimensiones de la pantalla y decidir si mostrar o no la sección de la imagen. Esta acción es necesaria porque al cargar la pantalla en el decorador @Component en el 'host', no se emite ningún evento de 'resize' en el primer renderizado de la pantalla. */
    this.showSectionImg();
    this.initForm();
  }

  ngOnDestroy(): void {}

  showSectionImg(): void {   
    const breakpoint = 768;
    const dimScreen = visualViewport?.width ?? breakpoint;
    if (dimScreen < breakpoint) this.isVisible = false;
    else this.isVisible = true;
  }

  initForm(): void {
    this.userForm = this.fb.nonNullable.group({
      [LoginE.email]: ['', Validators.required],
      [LoginE.password]: ['', Validators.required]
    });
  }

  sendFormHttp(): void {
    alert(JSON.stringify(this.userForm.value, null, 2));
  }

}
