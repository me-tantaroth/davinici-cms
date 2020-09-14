import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth-sign-in-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  alert: {
    type: 'primary' | 'success' | 'warning' | 'danger';
    message: string;
  };

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  get f(): {
    [key: string]: AbstractControl;
  } {
    return this.formGroup.controls;
  }

  onSubmit(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.formGroup.valid) {
      console.log('>>> Sign In Submit:', this.formGroup.value);
    } else {
      this.alert = {
        type: 'danger',
        message: 'Tienes errores en el formulario',
      };
    }
  }
}
