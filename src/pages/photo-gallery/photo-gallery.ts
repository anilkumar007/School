import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewAlbumPage } from '../view-album/view-album';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo-gallery',
  templateUrl: 'photo-gallery.html',
})
export class PhotoGalleryPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoGalleryPage');
  }
  showPics () {
    console.log('ccliked')
    this.navCtrl.push(ViewAlbumPage);
  }

}
