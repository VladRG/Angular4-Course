import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.service.isLoggedIn()) {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}
