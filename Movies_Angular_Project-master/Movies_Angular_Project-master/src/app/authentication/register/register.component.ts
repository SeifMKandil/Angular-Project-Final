import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading = false;
  error: string = '';

  constructor(private authService: AuthenticationService, private firebaseAuthService: FirebaseAuthService) { }



  onRegister(form: NgForm, type: string): void {
    if (type === 'Firebase') {
      this.isLoading = true;

      this.firebaseAuthService.register(form.value.email, form.value.password).subscribe(
        responseData => {
          this.isLoading = false;
        }, error => {

          this.error = "Error Occured"
          this.isLoading = false;
        }

      )

    } else {
      if (form.valid) {
        const registerObj = {
          userName: form.value.userName,
          email: form.value.email,
          password: form.value.password
        };

        this.authService.addRegisteredUser(registerObj);
        localStorage.setItem('registeredUsers', JSON.stringify(this.authService.getRegisteredUsers()));
      }
    }
  }
}
