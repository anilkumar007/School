import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarkStudentAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mark-student-attendance',
  templateUrl: 'mark-student-attendance.html',
})
export class MarkStudentAttendancePage {
  attendanceDetails:any = [{rollno:1, name: 'Test', matt: 'P', bgcolor: 'green'}, {rollno:2, name: 'Stuart James', matt: 'P', bgcolor: 'green'}, {rollno:3, name: 'Test kumar5', matt: 'P', bgcolor: 'green'}, {rollno:4, name: 'Test done', matt: 'P', bgcolor: 'green'},
                           {rollno:5, name: 'James walt', matt: 'P', bgcolor: 'green'}, {rollno:6, name: 'Steve Jobs', matt: 'P', bgcolor: 'green'}, {rollno:7, name: 'Denis Riche', matt: 'P', bgcolor: 'green'}, {rollno:8, name: 'Faulkner', matt: 'P', bgcolor: 'green'},
                           {rollno:9, name: 'Adam Gilchrist', matt: 'P', bgcolor: 'green'}, {rollno:10, name: 'John Cena', matt: 'P', bgcolor: 'green'}, {rollno:11, name: 'Brett Lee', matt: 'P', bgcolor: 'green'}, {rollno:12, name: 'Tom Cruise', matt: 'P', bgcolor: 'green'}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkStudentAttendancePage');
  }
  changeAttendance(item) {
    if (item.matt == 'P') {
      item.matt = 'A';
      item.bgcolor = 'Red';
    } else if (item.matt == 'A') {
      item.matt = 'L';
      item.bgcolor = 'Yellow';
    } else if (item.matt == 'L') {
      item.matt = 'P';
      item.bgcolor = 'Green';
    }
  }
}
