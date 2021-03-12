// Credits: https://stackblitz.com/edit/leaflet-test-grid-iqjm3t

import { Component, ElementRef, ComponentFactoryResolver } from "@angular/core";
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
      zoom: 15,
      center: latLng(51.508, -0.11),
      layers: [
        tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "..."
        })
      ]
    });
  }
}