import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    trigger('scrollButton', [
      state('scrollable', style({
        bottom: '30px'
      }),
      ),

      transition('* => *', animate('0.175s ease-out')),
    ])]
})
export class AppLayoutComponent implements OnInit {

  constructor() { }

  @ViewChild('content')
  content: ElementRef;

  canScrollToTop = false;

  ngOnInit() { }

  scrollToTop() {
    this.content.nativeElement
      .scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }

  onScroll() {
    this.canScrollToTop = this.content.nativeElement.scrollTop > 0;
  }



}
