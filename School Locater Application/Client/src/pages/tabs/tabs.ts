import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController) {

  }
  public navigateToSignIn(){
    this.navCtrl.setRoot(LoginPage);
    console.log("Sign-out successful.");
  }
  public signOut(){
    console.log("sign out called");
    this.navigateToSignIn();
  }
}
