import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/users/user.service';
import { User, UserResponse } from '@app/model';
import { MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataSource: MatTableDataSource<User>;
  total = 0;
  constructor(private service: UserService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.service.getUsers(0, 10).subscribe((data: UserResponse) => {
      this.dataSource.data = data.users;
      this.total = data.total;
    }, console.error);
  }

  changePage(pageEvent: PageEvent) {
    console.log(pageEvent);
    this.service.getUsers(pageEvent.pageIndex, pageEvent.pageSize).subscribe((data: UserResponse) => {
      this.dataSource.data = data.users;
      this.total = data.total;
    }, console.error);
  }

}
