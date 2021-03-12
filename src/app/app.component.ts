import {
  Component,
  ViewContainerRef,
  ElementRef,
  NgZone,
  ComponentFactory,
  ComponentFactoryResolver
} from "@angular/core";
import {
  map,
  Map,
  latLng,
  tileLayer
} from "leaflet";
import { HelloComponent } from "./hello.component";

@Component({
  selector: "my-app",
  template: "",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  myMap: Map;

  constructor(
    private element: ElementRef,
    private zone: NgZone,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      HelloComponent
    );
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