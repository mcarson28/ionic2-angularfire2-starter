import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginEmailPage } from '../pages/login/login';

import { AuthProvider } from '../providers/auth.provider';
import { DataProvider } from '../providers/data.provider';

import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyDKZtJTfB-34fHKrHQXGzCxQzRr5OoHWY8",
  authDomain: "safety-bingo-d91d4.firebaseapp.com",
  databaseURL: "https://safety-bingo-d91d4.firebaseio.com",
  storageBucket: "safety-bingo-d91d4.appspot.com",
}
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginEmailPage
  ],
  imports: [
	 IonicModule.forRoot(MyApp),
	 AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginEmailPage,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthProvider, DataProvider]
})
export class AppModule {}
