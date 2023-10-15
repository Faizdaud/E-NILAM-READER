import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  loginForm: FormGroup;
  

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private formBuilder: FormBuilder
    ) { 
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }

  // navigateTo(){
  //   this.router.navigate(['tabs/home'])
  // }

  async login() {
    try {
      const { email, password } = this.loginForm.value;
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['tabs/home']); // Redirect to the home page after successful login
    } catch (error) {
      console.error('Login error', error);
    }
  }
}
