import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '@app/core';
import { User, UserResponse } from '@app/model';
import { MatTableDataSource, PageEvent, MatSort, MatTable } from '@angular/material';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  create() {
    this.router.navigateByUrl('user/create');
  }
}
