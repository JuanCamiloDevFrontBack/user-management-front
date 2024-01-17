import { Component, OnDestroy, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { LoginE } from 'src/app/core/interfaces/login/login.enum';
import { LoginI } from 'src/app/core/interfaces/login/login.interface';
import { UserConnectService } from 'src/app/core/services/user-connect/user-connect.service';

type InputsForm = FormControl<string>;

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
  vacio = ''

  isVisible!: boolean;
  userE: any = LoginE;
  userForm!: FormGroup<LoginI<InputsForm>>;
  errorControls!: any;

  private unsuscribe$: Subject<void> = new Subject();

  private readonly fb = inject(FormBuilder);
  private readonly userServices = inject(UserConnectService);

  ngOnInit(): void {
    /* Nota: Se invoca el método showSectionImg() para detectar las dimensiones de la pantalla y decidir si renderizar o no la sección de la imagen. Esta acción es necesaria porque al cargar la pantalla en el decorador @Component el atributo 'host', no emite ningún evento de 'resize' en el primer renderizado de la pantalla. */
    this.showSectionImg();
    this.initVariableGlobals();
    this.initForm();
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  showSectionImg(): void {
    const breakpoint = 768;
    const dimScreen = visualViewport?.width ?? breakpoint;
    if (dimScreen < breakpoint) this.isVisible = false;
    else this.isVisible = true;
  }

  initVariableGlobals(): void {
    const { email, password } = LoginE;
    this.errorControls = { [email]: '', [password]: '' };    
  }

  initForm(): void {
    const { email, password } = LoginE;
    
    this.userForm = this.fb.nonNullable.group({
      [email]: ['', [Validators.required, Validators.email]],
      [password]: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.changeValueControl();
this.vacio = '';
  }

  controlError(control: string, typeError: string): boolean {
    return this.userForm.get(control)?.hasError(typeError) ?? false;
  }

  changeValueControl(): void {
    const { email, password } = LoginE;

    const isValidControl = ({control, error}: any) => {
      const isValid = this.controlError(control, error);
      if (isValid) {
        this.errorControls[control] = {
          'required': 'Campo requerido',
          'minlength': 'Ingrese mínimo 8 caracteres',
        }[error as string] ?? '';
      }
    }

    this.userForm.get(email)?.valueChanges
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe(_ => isValidControl({control: email, error: 'required'}));

    this.userForm.get(password)?.valueChanges
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe(_ => {
        isValidControl({control: password, error: 'required'});
        isValidControl({control: password, error: 'minlength'});
      });
  }

  sendFormBackend(): void {
    const request = this.userForm.value as LoginI<string>;
    console.log(request);    
    this.userServices.loginUserHttp(request).subscribe({
      next: () => console.log('Success :)'),
      error: () => console.log('Error :('),
    });

    setTimeout(() => this.userForm.reset(), 7000)
  }

}
