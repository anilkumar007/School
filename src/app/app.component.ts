import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { StudentprofilePage } from '../pages/studentprofile/studentprofile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private ionicApp: IonicApp) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    platform.registerBackButtonAction(() => {
      let activePortal = this.ionicApp._loadingPortal.getActive() || this.ionicApp._modalPortal.getActive() || this.ionicApp._toastPortal.getActive() || this.ionicApp._overlayPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
        activePortal.onDidDismiss(() => {  });
        return false;
      }
    });
  }
  menuClosed() {
    console.info('menu closed');
  };
  menuOpened() {
    console.warn('menu opend');
  };
  profile() {
    this.nav.push(MyProfilePage);
  };
  studentProfile() {
    this.nav.push(StudentprofilePage);
  }
}

