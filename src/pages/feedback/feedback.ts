import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonserviceProvider } from '../../providers/commonservice/commonservice';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  data:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public commonservice: CommonserviceProvider, public network:Network) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  submitForm() {
    // un comment me before release
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
    if(!this.commonservice.getvalid(this.data["tel"])) {
      this.commonservice.erroralert('Error', 'Please enter the correct Phone Number');
      return false;
    }
  }
}
