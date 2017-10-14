import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {
  studentList:any = [{name: "one"}, {name: "two"},{name: "three"}];
  timeTable:any = [{course: 'Computers', Teacher: 'John Smith', Timings: ['09:00 - 10:00 Monday, Wedenessday', '10:45 - 12:15 Friday', '12:05 - 12:45 Monday']},
                   {course: 'Electronics', Teacher: 'Julie Smith', Timings: ['09:00 - 10:00 Monday, Wedenessday', '10:45 - 12:15 Friday', '12:05 - 12:45 Monday']},
                   {course: 'Physics', Teacher: 'Tony Campbell', Timings: ['09:00 - 10:00 Monday, Wedenessday', '10:45 - 12:15 Friday', '12:05 - 12:45 Monday']},
                   {course: 'Civil', Teacher: 'Stuart Smith', Timings: ['09:00 - 10:00 Monday, Wedenessday', '10:45 - 12:15 Friday', '12:05 - 12:45 Monday']},
                   {course: 'Mechanical', Teacher: 'Tom Boy', Timings: ['09:00 - 10:00 Monday, Wedenessday', '10:45 - 12:15 Friday', '12:05 - 12:45 Monday']}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectsPage');
  }

}
