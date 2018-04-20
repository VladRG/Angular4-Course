import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { UserResponse, User } from '@app/model';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(page: number, rows: number): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(`/users?page=${page}&rows=${rows}`);
  }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(`/user/${username}`);
  }
}
