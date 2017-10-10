import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  data:any = {};
  public showMobileVerification = false;
  public setpassword = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = {};
    this.data.number = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgotpassword');
    this.data.number = '';
  }
  sendotp() {
    this.showMobileVerification = true;
  }
  crctPassword() {
    this.showMobileVerification = false;
    this.setpassword = true;
  }
  showLoginPage() {
    this.navCtrl.push(LoginPage)
    .then(() => {
      const startIndex = this.navCtrl.getActive().index - 1;
      this.navCtrl.remove(startIndex, 1);
    });
  }

}
