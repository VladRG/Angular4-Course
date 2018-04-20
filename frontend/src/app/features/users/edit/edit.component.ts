import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private service: UserService, private route: ActivatedRoute) { }

  id: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

}
