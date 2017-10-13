import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//import pages here

import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SignupPage } from '../pages/signup/signup';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { StudentprofilePage } from '../pages/studentprofile/studentprofile';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage,
    SignupPage,
    MyProfilePage,
    StudentprofilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage,
    SignupPage,
    MyProfilePage,
    StudentprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
