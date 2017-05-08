import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentToken')) {
            let roles = route.data["roles"] as Array<string>;
            console.log("roles in admin guard"+roles);
            console.log(localStorage.getItem('currentUserRole'));
            return (roles == null || roles.indexOf(localStorage.getItem('currentUserRole')) != -1);

            // logged in so return true


        }
console.log("eeetg");
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}