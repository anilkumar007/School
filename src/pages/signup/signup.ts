import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
