import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginEmailPage } from '../pages/login/login';
import { AngularFire } from 'angularfire2';
import { DataProvider } from '../providers/data.provider';
import { AuthProvider } from '../providers/auth.provider';

@Component({
  template: `<ion-nav></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: any;

  constructor(
    private platform: Platform,
    protected data: DataProvider,
    protected auth: AuthProvider,
    private af: AngularFire) {
    this.user = {
      image: ''
    };
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.auth.getUserData().subscribe(data => {
        console.log('hello from observer');
        if (!this.isAppInitialized) {
          console.log('change to home page')
          this.nav.setRoot(HomePage);
          this.isAppInitialized = true;
        }
        this.user = data;
        
        // this.data.list('pets').subscribe(data => {
        //   console.log(data);
        // });
      }, err => {
        console.log('change to login page')
        this.nav.setRoot(LoginEmailPage);
      });
      StatusBar.styleDefault();
    });
  }
}
