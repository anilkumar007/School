import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('Hello ViewReciptPage Page');
  }

}
