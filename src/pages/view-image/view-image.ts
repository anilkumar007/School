import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import { ImageViewerDirective } from 'ionic-img-viewer';
/*
  Generated class for the ViewRecipt page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-view-image',
  templateUrl: 'view-image.html'
})
export class ViewImagePage {
  test:any = ['assets/images/Attendance.png', "assets/images/Gallery.png", "assets/images/Library.png", "assets/images/Results.png", "assets/images/Subjects.png"]
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('Hello ViewReciptPage Page');
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}
