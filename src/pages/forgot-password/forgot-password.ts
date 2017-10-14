import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CommonserviceProvider } from '../../providers/commonservice/commonservice';
import { Network } from '@ionic-native/network';



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
  constructor(public navCtrl: NavController, public navParams: NavParams, public commonservice: CommonserviceProvider, public network:Network) {
    this.data = {};
    this.data.number = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgotpassword');
    this.data.number = '';
  }
  sendotp() {
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    if(!this.commonservice.getvalid(this.data["number"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct number');
      return false;
    }
    this.showMobileVerification = true;
  }
  crctPassword() {
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    if(!this.commonservice.getvalid(this.data["otp"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct OTP');
      return false;
    }
    this.showMobileVerification = false;
    this.setpassword = true;
  }
  showLoginPage() {
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    if(!this.commonservice.getvalid(this.data["password"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct password');
      return false;
    }
    if(!this.commonservice.getvalid(this.data["confirmpassword"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct confirmpassword');
      return false;
    }
    if(this.data.password !== this.data.confirmpassword) {
      this.commonservice.erroralert('Error', 'Password Not Matching');
      return false;
    }
    this.navCtrl.push(LoginPage)
    .then(() => {
      const startIndex = this.navCtrl.getActive().index - 1;
      this.navCtrl.remove(startIndex, 1);
    });
  };

  resendotp() {
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
  };

}
