import { Injectable, Component } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardsService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route): boolean {
    if (this.authService.user) {
      return true;
    }
    this.router.navigate(['/admin']);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.user) {
      return true;
    }
    this.router.navigate(['/admin']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }
}
