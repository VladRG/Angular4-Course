import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input, Inject } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private service: HelloService, @Inject('token') provided: any) {

  }

  message = '';

  @Output()
  logMessage: EventEmitter<string> = new EventEmitter();

  ngOnInit() {

  }

  log() {
    this.logMessage.emit(this.message);
  }
}
