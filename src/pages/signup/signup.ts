import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CommonserviceProvider } from '../../providers/commonservice/commonservice';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public commonservice: CommonserviceProvider, public network:Network) {
    this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  submit() {
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    if(!this.commonservice.getvalid(this.data["name"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct Name');
      return false;
    }
    if(!this.commonservice.getvalid(this.data["email"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct Email');
      return false;
    }
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

}
