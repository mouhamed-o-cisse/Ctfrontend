import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.scss']
})
export class LocalisationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'angular-gmap';

    @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
    //THIS IS WHERE I MANAGE POSITIONS
    map: google.maps.Map;
    lat = 14.6937;
    lng = -17.44406;
    // 14.6937, -17.44406

    coordinates = new google.maps.LatLng(this.lat, this.lng);

    mapOptions: google.maps.MapOptions = {
     center: this.coordinates,
     zoom: 8
    };

    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

    ngAfterViewInit() {
      this.mapInitializer();
    }

    mapInitializer() {
      this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
      this.marker.setMap(this.map);
    }

}
