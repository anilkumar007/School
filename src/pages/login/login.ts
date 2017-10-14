import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { CommonserviceProvider } from '../../providers/commonservice/commonservice';
import { Network } from '@ionic-native/network';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public commonservice: CommonserviceProvider, public network:Network, public menuCtrl: MenuController) {
    this.userData = {};
    this.userData.userName = '';
    this.userData.password = '';
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
    console.log('ionViewDidLoad LoginPage');
  }

  forgotpassword() {
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    this.navCtrl.push(ForgotPasswordPage);
  }

  signUp() {
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    this.navCtrl.push(SignupPage);
  }

  loginMe() {
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    if(!this.commonservice.getvalid(this.userData["userName"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct username');
      return false;
    }
    if(!this.commonservice.getvalid(this.userData["password"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct password');
      return false;
    }
    this.navCtrl.push(HomePage);
  }

}
