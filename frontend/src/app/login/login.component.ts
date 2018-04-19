import { Component, OnInit, ViewChild } from '@angular/core';
import { Credentials } from '@app/model';
import { AuthService } from '@app/auth.service';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLoginComponent implements OnInit {

  credentials: Credentials = new Credentials();
  error = '';

  constructor(private authService: AuthService) { }


  ngOnInit() { }

  log(element) {
    console.log(element);
  }

  loginButtonPressed() {
    this.authService.login(this.credentials)
      .subscribe((data: Credentials) => {
        console.log(data);
      }, (response: HttpErrorResponse) => {
        this.error = response.error;
      });
  }
}
