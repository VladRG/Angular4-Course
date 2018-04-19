import { Component, OnInit, ViewChild } from '@angular/core';
import { Credentials } from '@app/model';
import { AuthService } from '@app/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLoginComponent implements OnInit {

  credentials: Credentials = new Credentials();

  constructor(private authService: AuthService) { }


  ngOnInit() { }

  log(element) {
    console.log(element);
  }

  loginButtonPressed() {
    console.log(this.credentials);
  }
}
