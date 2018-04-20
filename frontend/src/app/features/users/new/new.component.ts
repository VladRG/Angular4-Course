import { Component, OnInit } from '@angular/core';
import { User } from '@app/model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  save(user: User) {
    console.log(user);
  }
}
