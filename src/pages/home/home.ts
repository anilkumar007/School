import { Component } from '@angular/core';
import { NavController, MenuController, ModalController, AlertController } from 'ionic-angular';
import { TimeTablePage } from '../time-table/time-table';
import { MyattendancePage } from '../myattendance/myattendance';
import { HomeWork } from '../home-work/home-work';
import { SubjectsPage } from '../subjects/subjects';
import { PhotoGalleryPage } from '../photo-gallery/photo-gallery';
import { ResultsPage } from '../results/results';
import { FeeDetails } from '../fee-details/fee-details';
import { TeachersPage } from '../teachers/teachers';
import { TrackPage } from '../track/track';
import { MessagesPage } from '../messages/messages';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsadded:any;
  iconsDisplay:Array<{name:string, component:any}>;
  profilepic:any = "assets/images/default.png";
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public modalCtrl: ModalController, private camera: Camera, private alertCtrl: AlertController, private _geoLoc: Geolocation, private launchNavigator: LaunchNavigator) {
    this.itemsadded = 1;
    this.iconsDisplay = [{name:"Time Table", component: TimeTablePage}, {name:"My Attendance", component: MyattendancePage}, 
                         {name: "Home Works", component: HomeWork}, {name: "Subjects", component: SubjectsPage}, 
                         {name: "Gallery", component: PhotoGalleryPage},  {name: "Results", component: ResultsPage},  
                         {name: "Fees", component: FeeDetails},  {name: "Teachers", component: TeachersPage}, 
                         {name: "Track", component: TrackPage}];
  }
  navigatepage(pagename) {
    console.info(pagename);
    if (pagename.name === 'Track') {
      this.getLocation().then( res => {
        let options: LaunchNavigatorOptions = {
          start: res.coords.latitude + " " + res.coords.longitude
        };
        this.launchNavigator.navigate('Toronto, ON', options)
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
      })
      return false;
    }
    //uncomment me before release
    // if (this.network.type === 'none' || this.network.type === null) {
    //   this.commonservice.erroralert('Error', 'Please Check the Network Connection');
    //   return false;
    // }
    this.navCtrl.push(pagename.component);
  }
  onStudentSelect(event){
  console.log("SelectedStudent", event);    
  }
  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(false);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    console.log('ionViewDidLoad LoginPage111');
  }
  likeme() {
    let modal = this.modalCtrl.create(MessagesPage);
    modal.present();
  }
  getLocation(){
    return this._geoLoc.getCurrentPosition();
  }
  takepicture(name) {
    let source;
    if (name == "Camera") {
      source = this.camera.PictureSourceType.CAMERA;
    }else{
      source = this.camera.PictureSourceType.PHOTOLIBRARY;
    };
    console.info(source);
    let cameraOptions = {
      sourceType: source,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }
    this.camera.getPicture(cameraOptions).then((imageData) => {
      console.log(imageData);
      this.profilepic = imageData;
      // this.nativeStorage.setItem('empphoto', imageData);
      // if (this.network.type === 'none' || this.network.type === null) {
        // this.eliateapi.erroralert('Error', 'Please Check the Network Connection');
        // return false;
      // }
      // this.nativeStorage.getItem('mobilenumber').then(number => {
      //   this.nativeStorage.getItem('user_id').then(id => {
      //     this.eliateapi.uploadpic(imageData, id, number).subscribe(data => {
            
      //     })
      //   })
      // });
    }, (err) => {
    });
  }
  showprofilepic() {
    let alert = this.alertCtrl.create({
      title: "Please choose the option",
      buttons: [
        {
          text: "Gallery",
          handler: data => {
            this.takepicture('gallery');
          }
        },{
          text: "Camera",
          handler: data => {
            this.takepicture('Camera');
          }
        }]
    });
    alert.present();
  }
}
