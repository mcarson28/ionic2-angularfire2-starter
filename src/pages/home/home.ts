import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private auth: AuthProvider) {
    
  }

  logOut() {
    this.auth.logout();
    console.log("Logged Out")
  }

}
