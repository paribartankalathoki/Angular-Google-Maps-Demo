import { Component, NgZone } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';

interface LatLngValues {
  lat: number;
  lng: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat:number = 28.394857;
  lng:number = 84.124008;
  zoom = 3;
  locationSelected: boolean = false;

  latLngValues: LatLngValues[] =[
    {
      lat: 51.678418,
      lng: 7.809007
    },
    {
      lat: 33.93911,
      lng: 767.709953
    },
    {
      lat: 28.394857,
      lng: 84.124008
    }
  ];
  

  onPickLocation(event) {
    console.log('event:: ', event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;


    this.locationSelected=true;
  }
}
