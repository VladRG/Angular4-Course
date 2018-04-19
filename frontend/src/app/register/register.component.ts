import { Component, OnInit } from '@angular/core';
import { RegisterCredentials } from '@app/model';
import { AuthService } from '@app/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class AppRegisterComponent implements OnInit {

  credentials: RegisterCredentials = new RegisterCredentials();
  error = '';

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
  }


  registerButtonPressed() {
    this.service.register(this.credentials)
      .subscribe((data: RegisterCredentials) => {
        this.service.setUser(data);
        this.router.navigateByUrl('/about');
      }, (response: HttpErrorResponse) => {
        this.error = response.error;
      });
  }
}
