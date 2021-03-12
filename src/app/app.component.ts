// Credits: https://stackblitz.com/edit/leaflet-test-grid-iqjm3t

import { Component, ElementRef } from "@angular/core";
import { map, latLng, tileLayer } from "leaflet";

@Component({
  selector: "my-app",
  template: "",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  myMap: Map;

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.myMap = map(this.element.nativeElement, {
      zoom: 18,
      center: latLng(43.7229, 10.3966),
      layers: [
        tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "..."
        })
      ]
    });
  }
}