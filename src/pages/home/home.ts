import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsadded:any;
  constructor(public navCtrl: NavController) {
    this.itemsadded = 1;
  }

}
