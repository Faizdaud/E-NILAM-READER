import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //use by line 13
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  loginForm: FormGroup;
  // tukar nama
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController
) {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]], // login logic
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
      this.presentAlert() // call validation array
      console.error('Login error', error);
    }
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'failed',
      subHeader: 'Important message',
      message: 'insert correct name and password',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
