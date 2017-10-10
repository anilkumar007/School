import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userData = {};
    this.userData.userName = '';
    this.userData.password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  forgotpassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

  signUp() {
    this.navCtrl.push(SignupPage);
  }

  loginMe() {
    this.navCtrl.push(HomePage);
  }

}
