import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { User } from '@app/model';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('/users');
  }
}
