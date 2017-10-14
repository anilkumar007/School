import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  studentList:any = [{name: "one"}, {name: "two"},{name: "three"}];
  homeWorkData:any = {
    "1st Mid Term":     [{subject: "Spelling Test", maxmarks: "40", passmarks: "24", obtmarks: "35"}, { subject: "Hindi", maxmarks: "40", passmarks: "24", obtmarks: "35"}, { subject: "Kannada", maxmarks: "40", passmarks: "24", obtmarks: "35"}, { subject: "Maths", maxmarks: "40", passmarks: "24", obtmarks: "35"}, { subject: "Total", maxmarks: "180", passmarks: "81", obtmarks: "81"}, { subject: "Total Percentage", percentage: "70%"}],
    "Half Yearly Exam": [{subject: "Kannada", maxmarks: "40", passmarks: "24", obtmarks: "35"}, { subject: "Maths", maxmarks: "40", passmarks: "24", obtmarks: "35"}, { subject: "Total", maxmarks: "180", passmarks: "81", obtmarks: "81"}, { subject: "Total Percentage", percentage: "70%"}],
    "2nd Mid Terms":    [{subject: "Spelling Test", maxmarks: "40", passmarks: "24", obtmarks: "35"}, {subject: "Total", maxmarks: "180", passmarks: "81", obtmarks: "81"}, { subject: "Total Percentage", percentage: "70%"}]
  }
  fromDate:any;
  toDate:any;
  arrayKey:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.arrayKey = Object.keys(this.homeWorkData);
    console.log("Keys", this.arrayKey);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }
  onStudentSelect(event){
  console.log("SelectedStudent", event);    
  }
}
