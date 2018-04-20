import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { UserResponse, User } from '@app/model';
import { CrudService } from '@app/core/services/crud.service';

@Injectable()
export class UserService extends CrudService<User> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, '/user');
  }

  getUsers(page: number, rows: number): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(`/users?page=${page}&rows=${rows}`);
  }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(`/user/${username}`);
  }

  addUser(user: User): Observable<any> {
    return this.httpClient.post('/user', user);
  }

  saveUser(user: User): Observable<any> {
    return this.httpClient.put(`/user/${user.username}`, user);
  }

  delete(user: User): Observable<any> {
    return this.httpClient.delete(`/user/${user.username}`);
  }
}
