import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}

  inSubmission = false;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.maxLength(19),
    Validators.minLength(19),
  ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  });

  showAlert = false;
  alertMsg = 'Please wait your account is being created.';
  alertColor = 'blue';

  async register() {
    this.inSubmission = true;
    this.showAlert = true;
    this.alertMsg = 'Please wait your account is being created.';
    this.alertColor = 'blue';

    try {
      await this.auth.createUser(this.registerForm.value as IUser);
    } catch (error) {
      console.error(error);
      this.showAlert = true;
      this.alertMsg = 'An unexpected error occured, please try again later.';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }
    this.showAlert = true;
    this.alertMsg = 'Your account has been successfully created.';
    this.alertColor = 'green';
  }
}
