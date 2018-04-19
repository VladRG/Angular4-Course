import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() { }

  consoleLog() {
    console.log('Hello from service');
  }
}
