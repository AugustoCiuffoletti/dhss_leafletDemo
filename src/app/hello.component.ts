import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1><input>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  @HostListener('click')
  onCLick() {
    console.log('World');
    this.name = 'World';
  }
}
