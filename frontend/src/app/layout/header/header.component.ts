import { Component, OnInit } from '@angular/core';
import { appLinks } from './links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {

  links = [];
  constructor() {
    this.links = appLinks;
  }



  ngOnInit() {
  }

}
