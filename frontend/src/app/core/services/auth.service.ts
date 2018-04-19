import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials, RegisterCredentials } from '@app/model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private TOKEN_KEY = 'token';

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(credentials: Credentials): Observable<Credentials> {
    return this.httpClient.post<Credentials>('http://localhost:3000/login', credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  register(credentials: RegisterCredentials): Observable<RegisterCredentials> {
    return this.httpClient.post<RegisterCredentials>('http://localhost:3000/register', credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem(this.TOKEN_KEY);
  }

  setUser(credentials: Credentials) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(credentials));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getUsername(): string {
    const user = JSON.parse(localStorage.getItem(this.TOKEN_KEY)) as Credentials;
    return user.username;
  }
}
