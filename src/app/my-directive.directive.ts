import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private element: ElementRef) { element.nativeElement.style.background = 'red'; }

}
