import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// $IMPORTSTATEMENT

/**
 * Generated class for the FeeDetails page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@IonicPage()
@Component({
  selector: 'page-fee-details',
  templateUrl: 'fee-details.html',
})
export class FeeDetails {
	studentList:any = [
	{name: "one"},
	{name: "two"},
	{name: "three"}];
	amount:any = 21.05;
	slotDetails:any = [
	{debit: "12.04", credit: "32.09", balance: "01.09", slotNo: 1, slotDate: "Jul-Aug"},
	{debit: "14.01", credit: "12.01", balance: "12.80", slotNo: 2, slotDate: "Aug-Sep"},
	{debit: "11.03", credit: "38.03", balance: "04.01", slotNo: 3, slotDate: "NOV-Dec"}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeeDetails');
  }

  onStudentSelect(event){
	console.log("SelectedStudent", event);  	
  }

}
