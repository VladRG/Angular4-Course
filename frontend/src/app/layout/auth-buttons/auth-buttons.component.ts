import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AppAuthButtonsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getUsername(): string {
    return this.authService.getUsername();
  }

}
