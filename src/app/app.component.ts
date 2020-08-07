import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('earth') earthIcon: ElementRef;

  rotation: any;
  rotationCss = {
    '-webkit-transform': 'rotate(0deg)',
    '-moz-transform': 'rotate(0deg)',
    'transform': 'rotate(0deg)',
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    this.rotation = windowScroll / 2;
    this.rotationCss = {
      '-webkit-transform': 'rotate(' + this.rotation + 'deg)',
      '-moz-transform': 'rotate(' + this.rotation + 'deg)',
      'transform': 'rotate(' + this.rotation + 'deg)'
    };
  };

  

}
