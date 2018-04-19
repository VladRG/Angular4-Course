import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/users/user.service';
import { User } from '@app/model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data: Array<User>) => {
      this.users = data;
    }, console.error);
  }

}
