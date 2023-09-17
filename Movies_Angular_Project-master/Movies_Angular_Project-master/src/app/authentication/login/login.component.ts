import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AuthComponent implements OnInit {

  currentLang!: string;
  authImage:string;
  error: string = '';

  loginObj: any = {
    email: '',
    password: '',
    isLoggedin: false

  };


  registeredUsers: any[] = [];

  constructor(private authService: AuthenticationService, private firebaseAuth: FirebaseAuthService,
    private router: Router,
    public translate: TranslateService) 
    {
    this.authImage=environment.authImage; 
    this.registeredUsers = authService.getRegisteredUsers();
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
  }
  ngOnInit(): void {
    this.loginFormHandler;
  }

  loginFormHandler(){
    const localData = localStorage.getItem('registeredUsers');
    if (localData != null) {
      this.registeredUsers = JSON.parse(localData);
    }
  }

  onLogin(form: NgForm, type: string) {
    if (type === 'Firebase') {
      this.firebaseAuth.login(form.value.email, form.value.password).subscribe(
        responseData => {
          this.router.navigate(['/catalogue'])

        }, error => {
          this.error='Login Error , Please Enter Correct Credntials'

        }

      )

    } else {
      const userExist = this.registeredUsers.find(m => m.email == form.value.email && m.password == form.value.password);
      if (userExist != undefined) {
        alert("You have logged in ");
        this.loginObj.isLoggedin = true;
        this.loginObj.email = form.value.email;

      } else {
        alert("Failed!!");
      }



    }



  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }


}
