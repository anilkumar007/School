import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, 
         GoogleMap,
         CameraPosition,
         LatLng,
         GoogleMapsEvent,
         Marker,
         MarkerOptions } from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {
  location: any;
  map: GoogleMap;
  lat: number;
  long: number;
  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public platform: Platform, private _geoLoc: Geolocation, private _googleMaps:GoogleMaps, private launchNavigator: LaunchNavigator) {
    this.platform.ready().then(() => {
      // this.loadMap();
    });
    // this.getLocation().then( res => {
    //   let options: LaunchNavigatorOptions = {
    //     start: res.coords.latitude + " " + res.coords.longitude
    //   };
    //   this.launchNavigator.navigate('Toronto, ON', options)
    //   .then(
    //     success => console.log('Launched navigator'),
    //     error => console.log('Error launching navigator', error)
    //   );
    // })
    
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TrackPage');
  //   let loc: LatLng;
  //   this.initMap();
    

  //   //once the map is ready move
  //   //camera into position
  //   this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
  //       //Get User location
  //     this.getLocation().then( res => {
  //     //Once location is gotten, we set the location on the camera.
  //       loc = new LatLng(res.coords.latitude, res.coords.longitude);
  //       this.moveCamera(loc);

  //       this.createMarker(loc, "Me").then((marker: Marker) => {
  //         marker.showInfoWindow();
  //       }).catch(err => {
  //         console.log(err);
  //       });
        
  //     }).catch( err => {
  //       console.log(err);
  //     });
    
  //   });
  // }

    //Load the map 
  initMap(){
    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element)
  }

  //Get current user location
  //Returns promise
  getLocation(){
    return this._geoLoc.getCurrentPosition();
  }


//Moves the camera to any location
  moveCamera(loc: LatLng){
     let options: CameraPosition<any> = {
        //specify center of map
        target: loc,
        zoom: 15,
        tilt: 10 
      }
      this.map.moveCamera(options)
  }

  //Adds a marker to the map
  createMarker(loc: LatLng, title: string){
    let markerOptions: MarkerOptions = {
      position: loc,
      title: title
    }; 
    
    return  this.map.addMarker(markerOptions);
  }
}
