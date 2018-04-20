import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '@app/model';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  @Input()
  user: User;

  @Output()
  submitted: EventEmitter<User> = new EventEmitter();

  ngOnInit() {
    if (!this.user) {
      this.user = new User();
    }
  }

  submit() {
    this.submitted.emit(this.user);
  }

}
