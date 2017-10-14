import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// $IMPORTSTATEMENT

/**
 * Generated class for the TransportDetails page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@IonicPage()
@Component({
  selector: 'page-transport-details',
  templateUrl: 'transport-details.html',
})
export class TransportDetails {
	transportList:any = [
	{name: "one"},
	{name: "two"},
	{name: "three"}];
	amount:any = 6000;
	transportDetails:any = {drName: "Dheeraj", drContact: "8475961235", conName: "Neeraj", conContact: 8654785625, routeName: "Chandhigar", sBusStop: "Sector 17"};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportDetails');
  }

}
