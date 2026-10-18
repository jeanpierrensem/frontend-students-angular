import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {Authentication} from '../services/authentication';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService : Authentication, private router:Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authService.isAuthenticated==true){
      return true
    }
    this.router.navigateByUrl("/login")
    return false
  }
}

/*
export const authGuard: CanActivateFn = (route, state) => {

  return true;
};
*/
