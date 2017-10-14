import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { KeysPipe  } from '../../pipes/keys/keys';

/**
 * Generated class for the TimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
})
export class TimeTablePage {
  arrayKey:any = [];
  studentList:any = [{name: "one"}, {name: "two"},{name: "three"}];
  timeTable:any = {"sundayTimeTable":[{subject1: '', subject2: '', subject3: '', subject4: '', subject5: '', subject6: '', subject7: ''}],
                   "mondayTimeTable":[{subject1: 'Computers', subject2: 'C++ Lab', subject3: 'M1 Class', subject4: 'M2 Class', subject5: 'ADB LAb', subject6: 'FLAT Class', subject7: 'Ntewtorking'}],
                   "tuesdayTimeTable":[{subject1: 'Java', subject2: 'HTML', subject3: 'M2 class', subject4: 'DAA class', subject5: 'English Lab', subject6: 'Information Security', subject7: 'UML Class'}],
                   "wednessdayTimeTable":[{subject1: 'C class', subject2: 'Drawing', subject3: 'Drawing Class', subject4: 'Network Lab', subject5: 'UML class', subject6: 'UML lab', subject7: 'C Lab'}],
                   "thursdayTimeTable":[{subject1: 'Java Lab', subject2: 'Applied Physics', subject3: 'Environmental Class', subject4: 'DAA class', subject5: 'OOPS class', subject6: 'M1 class', subject7: 'Network Lab'}],
                   "fridayTimeTable":[{subject1: 'C Lab', subject2: 'Data Networking', subject3: 'English', subject4: 'UML lab', subject5: 'OOPS class', subject6: 'M2 class', subject7: 'M2 class'}],
                   "satdayTimeTable":[{subject1: '', subject2: '', subject3: '', subject4: '', subject5: '', subject6: '', subject7: ''}]};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.arrayKey = Object.keys(this.timeTable);
    console.log("Keys", this.arrayKey);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeTablePage');
  };

  onStudentSelect(event){
    console.log("SelectedStudent", event);    
  };

}
