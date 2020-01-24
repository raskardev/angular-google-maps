import { Component, OnInit } from '@angular/core';
import { Marker } from '../../models/marker.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Marker[] = JSON.parse(localStorage.getItem('markers')) || [];

  lat = 36.6776482;
  lng = -6.1420956;

  constructor() {
    const marker = new Marker(this.lat, this.lng);

    this.markers.push(marker);
  }

  ngOnInit() {}

  addMarker({ coords: { lat, lng } }) {
    const marker = new Marker(lat, lng);

    this.markers.push(marker);

    this.saveStorage();
  }

  deleteMarker(i: number) {
    this.markers.splice(i, 1);

    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }
}
