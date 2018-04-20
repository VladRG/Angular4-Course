import { Directive, Input, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class.background-blue') private ishovering: boolean;

  @Input()
  highlghtColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.ishovering = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.ishovering = false;
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer) {

  }

}
