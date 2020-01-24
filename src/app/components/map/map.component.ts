import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 36.6776482;
  lng = -6.1420956;

  constructor() {}

  ngOnInit() {}
}
