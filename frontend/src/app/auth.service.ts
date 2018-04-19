import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '@app/model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private TOKEN_KEY = 'token';

  constructor(private httpClient: HttpClient) { }

  login(credentials: Credentials): Observable<Credentials> {
    return this.httpClient.post<Credentials>('http://localhost:3000/login', credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  setUser(credentials: Credentials) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(credentials));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
