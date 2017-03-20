import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router, Params } from '@angular/router';

@Injectable()
export class NeedLoginGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (next.queryParams['apiKey'] == '123') {
        return true;
      }
      else {
        this.router.navigateByUrl('/login');
        return false;
      }
  }
}
