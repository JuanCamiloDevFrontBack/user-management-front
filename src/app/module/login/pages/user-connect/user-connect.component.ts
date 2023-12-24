import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.css']
})
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
