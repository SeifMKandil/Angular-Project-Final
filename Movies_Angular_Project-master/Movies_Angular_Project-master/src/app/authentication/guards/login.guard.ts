
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { FirebaseAuthService } from '../../services/firebase-auth.service';


@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: FirebaseAuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.authService.user$.pipe(
      take(1),
      map((user: any) => {
        const isAuth = !!user; //Similar to if user = true -> isAuth = true else isAuth = false
        if (isAuth) {
          return this.router.createUrlTree(['/']);
        }
        return true;
      })
    );
  }
}
