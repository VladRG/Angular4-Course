import { Component, OnInit, ViewChild } from '@angular/core';
import { Credentials } from '@app/model';
import { AuthService } from '@app/core';
import { FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLoginComponent implements OnInit {

  credentials: Credentials = new Credentials();
  error = '';

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() { }

  log(element) {
    console.log(element);
  }

  loginButtonPressed() {
    this.authService.login(this.credentials)
      .subscribe((data: Credentials) => {
        this.authService.setUser(data);
        this.router.navigateByUrl('/about');
      }, (response: HttpErrorResponse) => {
        this.error = response.error;
      });
  }
}
