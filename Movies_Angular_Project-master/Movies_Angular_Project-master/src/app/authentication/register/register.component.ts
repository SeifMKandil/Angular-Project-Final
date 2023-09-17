import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading = false;
  error: string = '';
  authImage:string;

  constructor(private authService: AuthenticationService, private firebaseAuthService: FirebaseAuthService) { 
    this.authImage=environment.authImage;
  }



  onRegister(form: NgForm, type: string): void {
    if (type === 'Firebase') {
      this.isLoading = true;
      this.firebaseAuthService.register(form.value.email, form.value.password).subscribe(
        responseData => {
          this.isLoading = false;
        }, errorResponse => {
          switch(errorResponse.error.error.message){
            case 'EMAIL_EXISTS':
              this.error = 'This email already exists';
          }
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
