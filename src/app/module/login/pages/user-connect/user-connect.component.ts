import { Component, OnDestroy, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { LoginE } from 'src/app/interfaces/login/login.enum';
import { LoginI } from 'src/app/interfaces/login/login.interface';

@Component({
  selector: 'app-user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    id: 'host-heigth-component',
    '(window:resize)': 'showSectionImg()',
    // '(window:matchMedia("min-width: 720px"))': 'showSectionImg()' --> para probar
  }
})
export class UserConnectComponent implements OnInit, OnDestroy {

  isVisible!: boolean;
  userE: any = LoginE;
  userForm!: FormGroup<LoginI>;
  errorControls!: any;

  private unsuscribe$: Subject<void> = new Subject();

  private readonly fb = inject(FormBuilder);

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
      [email]: ['', Validators.required],
      [password]: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.changeValueControl();
  }

  controlError(control: string, typeError: string): boolean {
    return this.userForm.get(control)?.hasError(typeError) ?? false;
  }

  changeValueControl(): void {
    const { email, password } = LoginE;

    const getErrorForm = () => {
      const isRequired = this.controlError(password, 'required');    
      const isMinLength = this.controlError(password, 'minlength');
      
      if (isRequired) this.errorControls.password = ({1: 'Campo requerido'})[1] ?? '';
      if (isMinLength) this.errorControls.password = ({1: 'Ingrese mínimo 8 caracteres'})[1] ?? '';
    }

    this.userForm.get(password)?.valueChanges
      .pipe(takeUntil(this.unsuscribe$))
      .subscribe(getErrorForm);
  }

  sendFormBackend(): void {
    alert(JSON.stringify(this.userForm.value, null, 2));
  }

}
