import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeartFooter]'
})
export class HeartFooterDirective {

  constructor(private el: ElementRef) { 
  this.el.nativeElement.style.color = '#e35e6b';
  }
}
