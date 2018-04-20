import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { BaseEntity, ResponseBase } from '@app/model';
import { Injectable } from '@angular/core';

@Injectable()
export class CrudService<T extends BaseEntity, TResponse extends ResponseBase<T>> {
  constructor(private http: HttpClient, url: string) {
    this.baseUrl = url;
  }

  baseUrl = '';

  get(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl);
  }

  getPaginated(page: number, rows: number): Observable<TResponse> {
    return this.http.get<TResponse>(`${this.baseUrl}?page=${page}&rows=${rows}`);
  }

  find(entityId: number | string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${entityId}`);
  }

  post(entity: T): Observable<any> {
    return this.http.post(this.baseUrl, entity);
  }

  put(entity: T): Observable<any> {
    return this.http.put(`${this.baseUrl}/${entity.id}`, entity);
  }

  delete(entity: T): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${entity.id}`);
  }
}
