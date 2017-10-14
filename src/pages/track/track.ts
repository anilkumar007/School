import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,  public platform: Platform, private geolocation: Geolocation) {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackPage');
  }

  loadMap(){
    // let location = new GoogleMapsLatLng(-34.9290,138.6010);
    this.map = new GoogleMap('map', {
      // 'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        // 'latLng': location,
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');
      // let coord = new GoogleMapsLatLng(this.lat, this.long);
      this.geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.lat = pos.coords.latitude;
        this.long = pos.coords.longitude;
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });
        // this.map.setCenter(coord);
        //this.map.animateCamera({
        //  'target': coord,
        //  'tilt': 60,
        //  'zoom': 18,
        //  'bearing': 140
        //});
      });
    });
  };
}
