import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// $IMPORTSTATEMENT

/**
 * Generated class for the HomeWork page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@IonicPage()
@Component({
  selector: 'page-home-work',
  templateUrl: 'home-work.html',
})
export class HomeWork {
	studentList:any = [
	{name: "one"},
	{name: "two"},
	{name: "three"}];
	homeWorkData:any = {
		"12-jan-2012": [{ subject: "English", content: "Content content content"}, { subject: "english", content: "Content content content"}, { subject: "english", content: "Content content content"}],
		"13-jan-2012": [{ subject: "English", content: "Content content content"}, { subject: "english", content: "Content content content"}],
		"14-jan-2012": [{ subject: "English", content: "Content content content"}, { subject: "english", content: "Content content content"}, { subject: "english", content: "Content content content"}]
	}
	fromDate:any;
	toDate:any;
	arrayKey:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.arrayKey = Object.keys(this.homeWorkData);
  	console.log("Keys", this.arrayKey);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeWork');
  }



}
