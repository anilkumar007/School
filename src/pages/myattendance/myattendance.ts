import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyattendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myattendance',
  templateUrl: 'myattendance.html',
})
export class MyattendancePage {
  studentList:any = [{name: "one"}, {name: "two"},{name: "three"}];
  homeWorkData:any = {
    "12-jan-2012": [{ subject: "English", attendance: "L"}, { subject: "Hindi", attendance: "L"}, { subject: "Kannada", attendance: "P"}, { subject: "Maths", attendance: "A"}, { subject: "Science", attendance: "P"}, { subject: "Social", attendance: "P"},{ subject: "Computers", attendance: "P"}],
    "13-jan-2012": [{ subject: "Hindi", attendance: "L"}, { subject: "Kannada", attendance: "P"}, { subject: "Maths", attendance: "A"}, { subject: "Science", attendance: "P"}, { subject: "Social", attendance: "P"}],
    "14-jan-2012": [{ subject: "English", attendance: "L"}, { subject: "Hindi", attendance: "L"}]
  }
  fromDate:any;
  toDate:any;
  arrayKey:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.arrayKey = Object.keys(this.homeWorkData);
    console.log("Keys", this.arrayKey);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyattendancePage');
  }
  onStudentSelect(event){
  console.log("SelectedStudent", event);    
  }

}
