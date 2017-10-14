import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { KeysPipe }    from '../pipes/keys/keys';
// import { PipesModule }    from '../pipes/pipes.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';




//bower components
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { GoogleMaps} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

//import pages here

import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SignupPage } from '../pages/signup/signup';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { StudentprofilePage } from '../pages/studentprofile/studentprofile';
import { FeeDetails } from '../pages/fee-details/fee-details';
import { TimeTablePage } from '../pages/time-table/time-table';
import { MyattendancePage } from '../pages/myattendance/myattendance';
import { HomeWork } from '../pages/home-work/home-work';
import { SubjectsPage } from '../pages/subjects/subjects';
import { PhotoGalleryPage } from '../pages/photo-gallery/photo-gallery';
import { ViewAlbumPage } from '../pages/view-album/view-album';
import { ViewImagePage } from '../pages/view-image/view-image';
import { ResultsPage } from '../pages/results/results';
import { TeachersPage } from '../pages/teachers/teachers';
import { TrackPage } from '../pages/track/track';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { MarkStudentAttendancePage } from '../pages/mark-student-attendance/mark-student-attendance';
import { MessagesPage } from '../pages/messages/messages';

//plugins
import { Toast } from '@ionic-native/toast';
import { CommonserviceProvider } from '../providers/commonservice/commonservice';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage,
    SignupPage,
    MyProfilePage,
    StudentprofilePage,
    FeeDetails,
    TimeTablePage,
    MyattendancePage,
    HomeWork,
    SubjectsPage,
    PhotoGalleryPage,
    ViewAlbumPage,
    ViewImagePage,
    ResultsPage,
    TeachersPage,
    TrackPage,
    MarkStudentAttendancePage,
    MessagesPage,
    ChangePasswordPage,
    // KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    // PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage,
    SignupPage,
    MyProfilePage,
    StudentprofilePage,
    FeeDetails,
    TimeTablePage,
    MyattendancePage,
    HomeWork,
    SubjectsPage,
    PhotoGalleryPage,
    ViewAlbumPage,
    ViewImagePage,
    ResultsPage,
    TeachersPage,
    TrackPage,
    ChangePasswordPage,
    MarkStudentAttendancePage,
    MessagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    NativeStorage,
    Network,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps,
    CommonserviceProvider
  ]
})
export class AppModule {}
