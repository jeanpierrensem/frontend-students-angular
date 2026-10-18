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
export class AuthorizationGuard implements CanActivate {
  constructor(private authService: Authentication) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authorize : boolean = false
    let routeAuthorizedRoles : string [] = route.data['roles'] as string[]
    let authUserRoles : string[] = this.authService.autUserRoles as string[]
    for (let r  of  authUserRoles){
    if ( routeAuthorizedRoles.includes(r)) {
      authorize =  true
    }
    }
    return  authorize
  }
}
