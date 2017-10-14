import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  messagesData:any = {
    "12-jan-2012": [{ image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}, { image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}, { image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'},{ image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}, { image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}, { image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}],
    "13-jan-2012": [{ image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}, { image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}, { image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}, { image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}],
    "14-jan-2012": [{ image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}, { image: "assets/images/Attendance.png", name: "Akhi Sharma", message: 'Your Child performance is appreciable'}]
  }
  arrayKey:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
    this.arrayKey = Object.keys(this.messagesData);
  }
  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}
