import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,
  HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { AuthService } from '@app/core';

export class ApiUrlInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'http://localhost:3000';
    const reqUrl = req.url;

    req = req.clone({
      url: `${url}${reqUrl}`
    });

    return next.handle(req);
  }
}
