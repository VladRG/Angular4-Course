import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '@app/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private service: UserService, private route: ActivatedRoute) { }

  id: string;
  user: User;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getUser(params.id)
        .subscribe((data: User) => {
          this.user = data;
        });
    });

  }

  saveUser(user: User) {
    console.log(user);
  }
}
