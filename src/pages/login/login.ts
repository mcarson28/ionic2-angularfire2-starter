import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
//import { ForgotPasswordPage } from '../forgot-password/forgot-password';
//import { SignUpPage } from '../sign-up/sign-up';
import { AuthProvider } from '../../providers/auth.provider';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'login.html',
  selector: 'login-email',
})

export class LoginEmailPage {
  error: any;
  form: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider,
    private loadingCtrl: LoadingController
  ) {
    this.form = {
      email: '',
      password: ''
    }
  }

  openForgotPasswordPage(): void {
    this.navCtrl.push(HomePage);
  }

  openSignUpPage(): void {
    this.navCtrl.push(HomePage);
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.auth.loginWithEmail(this.form).subscribe(data => {
      setTimeout(() => {
        loading.dismiss();
        // The auth subscribe method inside the app.ts will handle the page switch to home
      }, 1000);
    }, err => {
      setTimeout(() => {
        loading.dismiss();
        this.error = err;
      }, 1000);
    });
  }
}
