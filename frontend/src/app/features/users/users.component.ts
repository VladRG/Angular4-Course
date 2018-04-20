import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '@app/core';
import { User, UserResponse } from '@app/model';
import { MatTableDataSource, PageEvent, MatSort, MatTable } from '@angular/material';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable) table: MatTable<User>;

  dataSource: MatTableDataSource<User>;
  total = 0;
  constructor(private route: ActivatedRoute, private service: UserService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.updateUsers(data.users as UserResponse);
    });
  }

  changePage(pageEvent: PageEvent) {
    console.log(pageEvent);
    this.service.getUsers(pageEvent.pageIndex, pageEvent.pageSize).subscribe((data: any) => {
      this.updateUsers(data.users as UserResponse);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log(this.table);
  }

  log(anything) {
    console.log(anything);
  }

  private updateUsers(data: UserResponse) {
    this.dataSource.data = data.users;
    this.total = data.total;
  }

}
