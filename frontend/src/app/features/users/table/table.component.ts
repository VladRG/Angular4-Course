import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTable, MatTableDataSource, PageEvent } from '@angular/material';
import { User, UserResponse } from '@app/model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class UserTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatTable) table: MatTable<User>;

  dataSource: MatTableDataSource<User>;
  total = 0;
  constructor(private route: ActivatedRoute,
    private service: UserService,
    private router: Router) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.updateUsers(data.users as UserResponse);
    });
  }

  edit(user: User) {
    this.router.navigateByUrl(`user/${user.username}`);
  }

  changePage(pageEvent: PageEvent) {
    this.service.getUsers(pageEvent.pageIndex, pageEvent.pageSize).subscribe((data: any) => {
      this.updateUsers(data.users as UserResponse);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  log(anything) {
    console.log(anything);
  }

  private updateUsers(data: UserResponse) {
    this.dataSource.data = data.users;
    this.total = data.total;
  }
}
