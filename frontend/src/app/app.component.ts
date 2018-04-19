import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/observable/race';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import { combineLatest } from 'rxjs/operator/combineLatest';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  course = 'Course';
  isHidden = false;

  constructor() { }

  parentLog(message: string): void {
    console.log(`Message from child ${message}`);
  }

  ngOnInit() {

    // const error = 'undefined';
    // if (!!error) {
    //   console.log('test');
    // }

    // const obs1 = Observable.of('Observable1').delay(2000);
    // const obs2 = Observable.of('Observable2').delay(3000);
    // const obs3 = Observable.of('Observable3').delay(4000);

    // const subscription = obs1.subscribe((data) => console.log(data));

    // const subject = new Subject();

    // const subscription = subject.subscribe((data) => {
    //   console.log(data);
    // });

    // subject.next('Hello');

    // setTimeout(() => {
    //   subject.next('World');
    // }, 2000);

    // HTTP service
    // const obs1 = Observable.of('Observable1').delay(2000)
    //   .catch(error => {
    //     // custom error code
    //     console.log(error);
    //     return Observable.throw(error);
    //   }).finally(() => {
    //
    //   });

    // Observable.race(obs1, obs2, obs3)
    //   .subscribe((data: string) => { console.log(data); });

    // Observable.forkJoin(obs1, obs2, obs3)
    //   .subscribe((data: Array<string>) => { console.log(data); });

    // obs1.subscribe((data: string) => {
    //   this.log(data);
    // }, error => {
    //   console.error(error);
    // });
  }

  private log(data) {
    console.log(this.course);
  }

}
