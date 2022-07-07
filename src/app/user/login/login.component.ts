import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AngularFireAuth) {}

  credentials = {
    email: '',
    password: '',
  };
  inSubmission = false;
  showAlert = false;
  alertMsg = 'Please wait for log in.';
  alertColor = 'blue';

  async login() {
    this.inSubmission = true;
    this.showAlert = true;
    this.alertMsg = 'Please wait for log in.';
    this.alertColor = 'blue';

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (error) {
      console.error(error);
      this.showAlert = true;
      this.alertMsg = 'An unexpected error occurred, please try again later.';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }
    this.showAlert = true;
    this.alertMsg = 'Your are successfully logged in.';
    this.alertColor = 'green';
  }
}
