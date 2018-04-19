import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { AuthService } from '@app/core';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private service: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // cod

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.service.getToken()}`
      }
    });

    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // Intercepting incoming response
      } else {
        // Intercepting outgoing request
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        // response error
      }
    });
  }

}
