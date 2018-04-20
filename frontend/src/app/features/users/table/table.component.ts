import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTable, MatTableDataSource, PageEvent, MatDialog } from '@angular/material';
import { User, UserResponse } from '@app/model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/core';
import { ModalConfirmationComponent } from '@app/shared/components';

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
    private router: Router,
    public dialog: MatDialog) {
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
    this.service.getPaginated(pageEvent.pageIndex, pageEvent.pageSize).subscribe((data: any) => {
      this.updateUsers(data as UserResponse);
    });
  }

  delete(user: User) {
    this.dialog.open(ModalConfirmationComponent, {
      width: '300px',
      height: '300px'
    }).afterClosed().subscribe((data: boolean) => {
      if (data) {
        this.service.delete(user).subscribe(response => {
          this.router.navigateByUrl('users');
        }, console.error);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  private updateUsers(data: UserResponse) {
    this.dataSource.data = data.users;
    this.total = data.total;
  }
}
