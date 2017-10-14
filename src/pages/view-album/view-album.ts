import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewImagePage } from '../view-image/view-image';
/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-album',
  templateUrl: 'view-album.html',
})
export class ViewAlbumPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoGalleryPage');
  }
  viewPic () {
  	console.log('cclicked image');
    this.navCtrl.push(ViewImagePage)
  }
}
