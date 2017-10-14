import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonserviceProvider } from '../../providers/commonservice/commonservice';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public commonservice: CommonserviceProvider, public network:Network) {
    this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  submitForm() {
    // un comment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    if(!this.commonservice.getvalid(this.data["currentpassword"])) {
      this.commonservice.erroralert('Error', 'Please enter the current password');
      return false;
    }
    if(!this.commonservice.getvalid(this.data["newpassword"])) {
      this.commonservice.erroralert('Error', 'Please enter the new password');
      return false;
    }
    if(!this.commonservice.getvalid(this.data["confirmpassword"])) {
      this.commonservice.erroralert('Error', 'Please enter the phone confirm password');
      return false;
    }
    if (this.data["newpassword"] !== this.data["confirmpassword"]) {
      this.commonservice.erroralert('Error', 'Confirm Password not matching');
      return false;
    };
  }

}
