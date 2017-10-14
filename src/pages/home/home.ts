import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsadded:any;
  iconsDisplay:Array<{name:string, component:any}>;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public modalCtrl: ModalController) {
    this.itemsadded = 1;
    this.iconsDisplay = [{name:"Time Table", component: TimeTablePage}, {name:"My Attendance", component: MyattendancePage}, 
                         {name: "Home Works", component: HomeWork}, {name: "Subjects", component: SubjectsPage}, 
                         {name: "Gallery", component: PhotoGalleryPage},  {name: "Results", component: ResultsPage},  
                         {name: "Fees", component: FeeDetails},  {name: "Teachers", component: TeachersPage}, 
                         {name: "Track", component: TrackPage}];
  }
  navigatepage(pagename) {
    console.info(pagename);
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
  likeme() {
    let modal = this.modalCtrl.create(MessagesPage);
    modal.present();
  }
}
